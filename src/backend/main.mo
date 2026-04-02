import Time "mo:core/Time";
import Principal "mo:core/Principal";
import List "mo:core/List";
import Map "mo:core/Map";
import Array "mo:core/Array";
import Order "mo:core/Order";
import Runtime "mo:core/Runtime";
import Text "mo:core/Text";

actor {
  type ContactSubmission = {
    name : Text;
    email : Text;
    message : Text;
    timestamp : Time.Time;
  };

  module ContactSubmission {
    public func compare(sub1 : ContactSubmission, sub2 : ContactSubmission) : Order.Order {
      switch (Text.compare(sub1.name, sub2.name)) {
        case (#equal) {
          switch (Text.compare(sub1.email, sub2.email)) {
            case (#equal) { Text.compare(sub1.message, sub2.message) };
            case (order) { order };
          };
        };
        case (order) { order };
      };
    };
  };

  type QuizQuestion = {
    question : Text;
    options : [Text];
    correctAnswerIndex : Nat;
  };

  type QuizAttempt = {
    score : Nat;
    totalQuestions : Nat;
    timestamp : Time.Time;
  };

  module QuizAttempt {
    public func compare(attempt1 : QuizAttempt, attempt2 : QuizAttempt) : Order.Order {
      Int.compare(attempt2.timestamp, attempt1.timestamp); // Newest first
    };

    public func compareByScoreDesc(attempt1 : QuizAttempt, attempt2 : QuizAttempt) : Order.Order {
      Nat.compare(attempt2.score, attempt1.score);
    };
  };

  let contactSubmissions = List.empty<ContactSubmission>();
  let quizQuestions = List.fromArray<QuizQuestion>([
    {
      question = "What is autism?";
      options = [
        "A type of mental illness",
        "A developmental disability",
        "A contagious disease",
        "A form of punishment",
      ];
      correctAnswerIndex = 1;
    },
    {
      question = "Is there a cure for autism?";
      options = [
        "Yes, there is a cure",
        "Only with medication",
        "No, but it can be managed",
        "It disappears overtime",
      ];
      correctAnswerIndex = 2;
    },
  ]);

  let quizAttempts = Map.empty<Principal, [QuizAttempt]>();

  public shared ({ caller }) func submitContactForm(name : Text, email : Text, message : Text) : async () {
    let submission : ContactSubmission = {
      name;
      email;
      message;
      timestamp = Time.now();
    };
    contactSubmissions.add(submission);
  };

  public query ({ caller }) func getAllContactSubmissions() : async [ContactSubmission] {
    contactSubmissions.toArray().sort();
  };

  public query func getQuizQuestions() : async [QuizQuestion] {
    quizQuestions.toArray();
  };

  public shared ({ caller }) func submitQuizAttempt(score : Nat, totalQuestions : Nat) : async () {
    let attempt : QuizAttempt = {
      score;
      totalQuestions;
      timestamp = Time.now();
    };

    let existingAttempts = switch (quizAttempts.get(caller)) {
      case (null) { [] };
      case (?attempts) { attempts };
    };

    let newAttempts = [attempt].concat(existingAttempts);
    quizAttempts.add(caller, newAttempts);
  };

  public query ({ caller }) func getUserQuizAttempts(user : Principal) : async [QuizAttempt] {
    switch (quizAttempts.get(user)) {
      case (null) { [] };
      case (?attempts) { attempts.sort() };
    };
  };

  public query ({ caller }) func getTopQuizScores() : async [(Principal, QuizAttempt)] {
    let allAttemptsIter = quizAttempts.entries();
    let highestScores = List.empty<(Principal, QuizAttempt)>();

    allAttemptsIter.forEach(func((user, attempts)) { highestScores.add((user, attempts[0])) });

    highestScores.toArray().sort(func((_, a1), (_, a2)) { QuizAttempt.compareByScoreDesc(a1, a2) });
  };

  public shared ({ caller }) func addQuizQuestion(question : Text, options : [Text], correctAnswerIndex : Nat) : async () {
    if (options.size() != 4) {
      Runtime.trap("A question must have exactly 4 options");
    };

    let newQuestion : QuizQuestion = {
      question;
      options;
      correctAnswerIndex;
    };
    quizQuestions.add(newQuestion);
  };
};
