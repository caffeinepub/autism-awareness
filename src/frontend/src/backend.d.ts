import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface QuizResult {
    totalQuestions: bigint;
    correctAnswers: bigint;
    timestamp: Time;
}
export interface QuizStats {
    totalCorrect: bigint;
    totalQuestions: bigint;
    totalAttempts: bigint;
}
export type Time = bigint;
export interface ContactSubmission {
    name: string;
    email: string;
    message: string;
    timestamp: Time;
}
export interface backendInterface {
    getAllContactSubmissions(): Promise<Array<ContactSubmission>>;
    getAllQuizResults(): Promise<Array<QuizResult>>;
    getQuizStats(): Promise<QuizStats>;
    submitContactForm(name: string, email: string, message: string): Promise<void>;
    submitQuizResult(totalQuestions: bigint, correctAnswers: bigint): Promise<void>;
}
