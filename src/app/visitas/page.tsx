"use client";

import React, { useState } from "react";

type ToastType = "success" | "error" | null;

export default function RegistroVisitas() {
  const [formData, setFormData] = useState({
    ci: "",
    last_name: "",
    mother_last_name: "",
    name: "",
    middle_name: "",
  });

  const [isLoading, setIsLoading] = useState(false);

  const [toast, setToast] = useState<{
    show: boolean;
    message: string;
    type: ToastType;
  }>({
    show: false,
    message: "",
    type: null,
  });

  const showToast = (message: string, type: ToastType) => {
    setToast({ show: true, message, type });
    setTimeout(() => {
      setToast({ show: false, message: "", type: null });
    }, 4000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    if (name === "ci") {
      const numericValue = value.replace(/\D/g, "");
      setFormData((prev) => ({
        ...prev,
        [name]: numericValue,
      }));
    } else if (
      name === "last_name" ||
      name === "mother_last_name" ||
      name === "name" ||
      name === "middle_name"
    ) {
      const noSpacesValue = value.replaceAll(" ", "");
      setFormData((prev) => ({
        ...prev,
        [name]: noSpacesValue,
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const apiUrl = process.env.NEXT_PUBLIC_API_URL;
      const response = await fetch(`${apiUrl}/visitspre`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }

      const data = await response.json();
      console.log("Registro exitoso:", data);
      showToast(data.message || "¡Registro completado exitosamente!", "success");

      setFormData({
        ci: "",
        last_name: "",
        mother_last_name: "",
        name: "",
        middle_name: "",
      });
    } catch (error) {
      console.error("Error al registrar:", error);
      showToast(
        "Hubo un error al registrar. Por favor intenta nuevamente.",
        "error",
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="w-full min-h-screen relative bg-[#111111] flex flex-col lg:flex-row justify-center items-center gap-4 lg:gap-20 overflow-hidden p-8 text-white">
      {toast.show && (
        <div
          className={`fixed top-8 right-8 z-[100] p-4 rounded-2xl shadow-2xl backdrop-blur-md border transition-all duration-300 animate-in slide-in-from-top-5 ${
            toast.type === "success"
              ? "bg-emerald-500/10 border-emerald-500/30 text-emerald-400"
              : "bg-red-500/10 border-red-500/30 text-red-400"
          }`}
        >
          <div className="flex items-center gap-3 min-w-[300px]">
            {toast.type === "success" ? (
              <svg
                className="w-6 h-6 flex-shrink-0"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            ) : (
              <svg
                className="w-6 h-6 flex-shrink-0"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            )}
            <p className="font-medium">{toast.message}</p>
          </div>
        </div>
      )}

      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03] z-50"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulance type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E\")",
          backgroundRepeat: "repeat",
          backgroundSize: "200px 200px",
        }}
      />

      <div className="absolute top-0 left-0 w-[600px] h-[600px] -translate-x-1/2 -translate-y-1/2 pointer-events-none">
        <div className="w-full h-full bg-[#00e38e] rounded-[999px] blur-[400px] opacity-80" />
      </div>

      <div className="min-w-80 py-7 flex flex-col justify-start items-center gap-4 z-10">
        <svg
          width="100"
          height="66"
          viewBox="0 0 100 66"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-24 h-auto xl:w-32"
        >
          <path
            d="M97.4218 22.3881L67.5097 1.13388C66.3303 0.290801 64.8901 -0.102095 63.448 0.0258453C62.0058 0.153785 60.6565 0.794168 59.6426 1.83184L50.373 11.2609C50.3644 11.2699 50.3539 11.2771 50.3423 11.2819C50.3307 11.2866 50.3182 11.2889 50.3057 11.2885C50.2927 11.2887 50.2798 11.2862 50.2678 11.2811C50.2559 11.276 50.2451 11.2684 50.2363 11.2588L41.4812 1.93227C40.4896 0.868453 39.1516 0.196042 37.7093 0.0366375C36.2669 -0.122767 34.8153 0.241357 33.6171 1.06316L2.67716 22.1247C1.85196 22.686 1.17641 23.4419 0.709672 24.3261C0.242938 25.2104 -0.000733921 26.1961 1.66046e-06 27.197V38.5446C0.000340757 39.5397 0.242163 40.5198 0.704544 41.4001C1.16692 42.2803 1.83594 43.0341 2.65369 43.5963L33.5946 64.9141C34.7915 65.7471 36.2466 66.1203 37.6947 65.9659C39.1427 65.8114 40.4873 65.1395 41.4832 64.0727L50.2904 54.6908C50.2991 54.6813 50.3097 54.6738 50.3214 54.6686C50.3332 54.6635 50.3459 54.6609 50.3588 54.6611C50.3715 54.6607 50.3842 54.663 50.396 54.668C50.4078 54.6729 50.4184 54.6804 50.4271 54.6898L59.6507 64.1454C60.6665 65.197 62.0256 65.8459 63.479 65.9734C64.9324 66.1008 66.3829 65.6982 67.5648 64.8393L97.4484 43.336C98.2366 42.7684 98.879 42.0207 99.3227 41.1546C99.7663 40.2885 99.9985 39.3289 100 38.355V27.3886C99.999 26.409 99.7644 25.4438 99.3159 24.5739C98.8673 23.7039 98.2179 22.9545 97.4218 22.3881ZM42.4977 51.7565L39.0398 55.44C38.4241 56.1016 37.5919 56.5187 36.6953 56.6153C35.7987 56.7118 34.8974 56.4813 34.156 55.9657L9.31035 38.8439C8.80501 38.4955 8.3917 38.0289 8.10612 37.4843C7.82054 36.9397 7.67126 36.3334 7.67119 35.7179V30.0462C7.67109 29.4259 7.82253 28.815 8.11223 28.2672C8.40192 27.7193 8.82103 27.2512 9.3328 26.9038L34.155 10.0033C34.8966 9.49463 35.7951 9.26925 36.6878 9.36794C37.5806 9.46663 38.4087 9.88288 39.0224 10.5414L42.41 14.1603C43.0836 14.8733 43.4541 15.8218 43.4428 16.8045C43.4316 17.7872 43.0395 18.7269 42.3497 19.4242L33.3548 28.5703C32.2368 29.7174 31.6093 31.2576 31.606 32.8626C31.6028 34.4676 32.2241 36.0104 33.33 37.1561L42.3238 46.3022C42.9928 46.9921 43.3652 47.921 43.366 48.8839C43.3669 49.8469 42.9962 50.7764 42.3283 51.4674L42.4977 51.7565ZM91.9978 35.8227C91.9977 36.4385 91.848 37.0451 91.5618 37.5899C91.2756 38.1347 90.8615 38.6014 90.3554 38.9497L65.5097 56.0715C64.7668 56.5823 63.8646 56.8079 62.9685 56.7096C62.0724 56.6113 61.2397 56.1957 60.6221 55.5356L57.1642 51.8521C56.4948 51.1622 56.1235 50.2332 56.1235 49.2701C56.1235 48.307 56.4948 47.378 57.1642 46.6881L66.1581 37.5419C67.2612 36.3959 67.8812 34.854 67.878 33.2497C67.8749 31.6454 67.2487 30.1059 66.1413 28.9642L57.1474 19.8181C56.4793 19.1285 56.1078 18.1995 56.1078 17.2364C56.1078 16.2733 56.4793 15.3444 57.1474 14.6547L60.6053 10.9713C61.2218 10.3097 62.0541 9.89263 62.9507 9.7961C63.8473 9.69958 64.7486 9.93009 65.49 10.4456L90.3356 27.5674C90.8411 27.9157 91.2545 28.3822 91.5403 28.9268C91.8261 29.4714 91.9755 30.0777 91.9757 30.6934L91.9978 35.8227Z"
            fill="#00E38C"
          />
        </svg>

        <div className="flex flex-col justify-start items-center gap-2">
          <h1 className="text-neutral-50 text-3xl font-bold text-center">
            Registro de visitas
          </h1>
          <p className="text-center text-neutral-400 text-lg font-normal">
            Rellena tus datos personales para ingresar
            <br />
            al condominio más rápido.
          </p>
        </div>
      </div>

      <div className="flex-1 max-w-96 min-w-80 lg:min-w-96 p-4 flex flex-col justify-start items-start gap-6 z-10">
        <form
          onSubmit={handleSubmit}
          className="self-stretch flex flex-col justify-start items-start gap-4"
        >
          <div className="self-stretch flex flex-col justify-start items-start gap-3">
            <label htmlFor="ci" className="text-white text-base font-semibold">
              Número de documento
            </label>
            <input
              type="text"
              inputMode="numeric"
              pattern="[0-9]*"
              id="ci"
              name="ci"
              maxLength={11}
              minLength={7}
              value={formData.ci}
              onChange={handleChange}
              placeholder="Carnet de identidad*"
              required
              className="self-stretch h-14 p-3 bg-teal-200/5 rounded-2xl outline outline-1 outline-offset-[-1px] outline-teal-100/25 backdrop-blur-sm text-white text-base font-normal placeholder:text-zinc-500 focus:outline-[#00e38e] focus:outline-2 transition-all"
            />
          </div>

          <div className="self-stretch flex flex-col justify-start items-start gap-3">
            <label
              htmlFor="last_name"
              className="text-white text-base font-semibold"
            >
              Apellidos
            </label>
            <div className="self-stretch flex flex-col justify-start items-start gap-2.5">
              <input
                type="text"
                id="last_name"
                name="last_name"
                value={formData.last_name}
                onChange={handleChange}
                placeholder="Apellido paterno*"
                required
                className="self-stretch h-14 p-3 bg-teal-200/5 rounded-2xl outline outline-1 outline-offset-[-1px] outline-teal-100/25 backdrop-blur-sm text-white text-base font-normal placeholder:text-zinc-500 focus:outline-[#00e38e] focus:outline-2 transition-all"
              />
              <input
                type="text"
                id="mother_last_name"
                name="mother_last_name"
                value={formData.mother_last_name}
                onChange={handleChange}
                placeholder="Apellido materno (opcional)"
                className="self-stretch h-14 p-3 bg-teal-200/5 rounded-2xl outline outline-1 outline-offset-[-1px] outline-teal-100/25 backdrop-blur-sm text-white text-base font-normal placeholder:text-zinc-500 focus:outline-[#00e38e] focus:outline-2 transition-all"
              />
            </div>
          </div>

          <div className="self-stretch flex flex-col justify-start items-start gap-3">
            <label htmlFor="name" className="text-white text-base font-semibold">
              Nombres
            </label>
            <div className="self-stretch flex flex-col justify-start items-start gap-2.5">
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Primer nombre*"
                required
                className="self-stretch h-14 p-3 bg-teal-200/5 rounded-2xl outline outline-1 outline-offset-[-1px] outline-teal-100/25 backdrop-blur-sm text-white text-base font-normal placeholder:text-zinc-500 focus:outline-[#00e38e] focus:outline-2 transition-all"
              />
              <input
                type="text"
                id="middle_name"
                name="middle_name"
                value={formData.middle_name}
                onChange={handleChange}
                placeholder="Segundo nombre (opcional)"
                className="self-stretch h-14 p-3 bg-teal-200/5 rounded-2xl outline outline-1 outline-offset-[-1px] outline-teal-100/25 backdrop-blur-sm text-white text-base font-normal placeholder:text-zinc-500 focus:outline-[#00e38e] focus:outline-2 transition-all"
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className={`self-stretch h-14 px-4 py-3 rounded-2xl outline outline-1 outline-offset-[-1px] outline-neutral-700 flex flex-row justify-center items-center gap-2 transition-all ${
              isLoading
                ? "bg-[#00e38e]/50 cursor-not-allowed"
                : "bg-[#00e38e] hover:bg-[#00c97e] cursor-pointer"
            }`}
          >
            {isLoading && (
              <svg
                className="animate-spin h-5 w-5 text-neutral-900"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                />
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                />
              </svg>
            )}
            <span className="text-neutral-900 text-lg font-semibold">
              {isLoading ? "Registrando..." : "Registrarme"}
            </span>
          </button>
        </form>
      </div>
    </div>
  );
}
