import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export type Time = bigint;
export interface QuizAttempt {
    score: bigint;
    totalQuestions: bigint;
    timestamp: Time;
}
export interface QuizQuestion {
    question: string;
    correctAnswerIndex: bigint;
    options: Array<string>;
}
export interface ContactSubmission {
    name: string;
    email: string;
    message: string;
    timestamp: Time;
}
export interface backendInterface {
    addQuizQuestion(question: string, options: Array<string>, correctAnswerIndex: bigint): Promise<void>;
    getAllContactSubmissions(): Promise<Array<ContactSubmission>>;
    getQuizQuestions(): Promise<Array<QuizQuestion>>;
    getTopQuizScores(): Promise<Array<[Principal, QuizAttempt]>>;
    getUserQuizAttempts(user: Principal): Promise<Array<QuizAttempt>>;
    submitContactForm(name: string, email: string, message: string): Promise<void>;
    submitQuizAttempt(score: bigint, totalQuestions: bigint): Promise<void>;
}
