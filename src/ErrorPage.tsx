import { isRouteErrorResponse, useRouteError } from "react-router-dom";

export const ErrorPage = () => {
  const error: unknown = useRouteError();
  let errorMessage: string;

  if (isRouteErrorResponse(error)) {
    errorMessage = error.statusText;
  } else if (error instanceof Error) {
    errorMessage = error.message;
  } else if (typeof error === "string") {
    errorMessage = error;
  } else {
    errorMessage =
      "Não foi possível obter informações sobre o erro. Tente novamente mais tarde.";
  }

  return (
    <div className="h-screen bg-slate-100 flex flex-col items-center justify-center text-2xl">
      <div className="text-center w-[40vw]">
        <h1 className="text-[2.5rem] font-bold">Oops 😬</h1>
        <br />
        <p>Perdão, um erro inesperado ocorreu.</p>
        <br />
        <p>Detalhes:</p>
        <p>
          <i>{errorMessage}</i>
        </p>
      </div>
    </div>
  );
};
