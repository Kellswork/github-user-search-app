export default function wrapPromise<T>(promise: Promise<T>) {
  let status: "pending" | "success" | "error" = "pending";
  let result: T | any;
  const suspender = promise.then(
    (res) => {
      return new Promise<T>((resolve) => {
        // Timer to ensure loading shows for at least 3 seconds
        setTimeout(() => {
          status = "success";
          result = res;
          resolve(res);
        }, 1000); // 1 second
      });
    },
    (err) => {
      status = "error";
      result = err;
    }
  );

  return {
    read() {
      if (status === "pending") {
        throw suspender; // Throws the promise for Suspense to handle
      } else if (status === "error") {
        throw result; // Throw the error
      } else if (status === "success") {
        return result; // Return the result
      }
    },
  };
}
