import Time "mo:core/Time";
import List "mo:core/List";
import Float "mo:core/Float";
import Text "mo:core/Text";
import Array "mo:core/Array";



actor {
  // Types
  type ContactSubmission = {
    name : Text;
    email : Text;
    message : Text;
    timestamp : Time.Time;
  };

  type QuizResult = {
    totalQuestions : Nat;
    correctAnswers : Nat;
    timestamp : Time.Time;
  };

  type QuizStats = {
    totalAttempts : Nat;
    totalQuestions : Nat;
    totalCorrect : Nat;
  };

  let contactSubmissions = List.empty<ContactSubmission>();
  let quizResults = List.empty<QuizResult>();

  // Add contact
  public shared ({ caller }) func submitContactForm(name : Text, email : Text, message : Text) : async () {
    let submission : ContactSubmission = {
      name;
      email;
      message;
      timestamp = Time.now();
    };
    contactSubmissions.add(submission);
  };

  // Get all contacts (for admin)
  public query ({ caller }) func getAllContactSubmissions() : async [ContactSubmission] {
    contactSubmissions.toArray();
  };

  // Add quiz result
  public shared ({ caller }) func submitQuizResult(totalQuestions : Nat, correctAnswers : Nat) : async () {
    let result : QuizResult = {
      totalQuestions;
      correctAnswers;
      timestamp = Time.now();
    };
    quizResults.add(result);
  };

  // Get total attempts and average score
  public query ({ caller }) func getQuizStats() : async QuizStats {
    let results = quizResults.toArray();

    let totalAttempts = results.size();
    var totalQuestions = 0;
    var totalCorrect = 0;

    for (result in results.values()) {
      totalQuestions += result.totalQuestions;
      totalCorrect += result.correctAnswers;
    };
    {
      totalAttempts;
      totalQuestions;
      totalCorrect;
    };
  };

  // Get all quiz results (for leaderboard or detailed stats)
  public query ({ caller }) func getAllQuizResults() : async [QuizResult] {
    quizResults.toArray();
  };
};
