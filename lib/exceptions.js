export class AppError extends Error {
  constructor(message="auth required, status=401") {
    super(message);
    this.name = "RequiredAuthError";
  }
}