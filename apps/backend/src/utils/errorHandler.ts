export function errorHandler(error: Error): {
  status: 500;
  body: {
    response: string;
  };
} {
  console.log("error", error);
  const errorMessage = error.message || "Internal server error"; // Use the error message passed, or fallback to a generic message
  return {
    status: 500,
    body: {
      response: errorMessage,
    },
  };
}
