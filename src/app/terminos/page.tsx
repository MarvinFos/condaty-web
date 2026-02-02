import Footer from "@/components/Footer";

export default function PoliticasPrivacidad() {
  return (
    <div className="min-h-screen bg-[#191919] text-white flex flex-col relative overflow-hidden">
      {/* Left Glow Sphere */}
      <div
        className="absolute left-0 top-1/4 h-[600px] w-[600px] -translate-x-1/2 rounded-full opacity-80 blur-[90px] pointer-events-none mix-blend-screen z-0"
        style={{
          background:
            "radial-gradient(circle, rgba(255,255,255,1) 0%, #00e38e 50%, rgba(0,227,142,0) 70%)",
        }}
      />

      {/* Right Glow Sphere */}
      <div
        className="absolute right-0 bottom-1/4 h-[600px] w-[600px] translate-x-1/2 rounded-full opacity-80 blur-[90px] pointer-events-none mix-blend-screen z-0"
        style={{
          background:
            "radial-gradient(circle, rgba(255,255,255,1) 0%, #00e38e 50%, rgba(0,227,142,0) 70%)",
        }}
      />

      <main className="flex-grow flex flex-col items-center px-6 py-20 sm:px-10 relative z-10">
        <div className="max-w-[1000px] w-full flex flex-col gap-8">
          <h1 className="text-[28px] sm:text-[36px] font-semibold text-[#00e38e] leading-tight text-center uppercase">
            POLITICA DE PRIVACIDAD - FORCEONE SYSTEM TECHNOLOGIES S.R.L.
          </h1>

          <div className="flex flex-col gap-6 text-[15px] sm:text-[16px] text-gray-300 leading-relaxed text-justify">
            <p>
              De conformidad con lo dispuesto en la Constitución Política del
              Estado boliviano, la Ley No. 164/ General de telecomunicaciones,
              tecnologías de información y comunicación del 08 de agosto de
              2011., el Decreto Supremo No. 1793, de 13 de noviembre de 2013 y
              Ley No. 453/ Ley general de los Derechos de las Usuarias y los
              Usuarios de las Consumidoras y los Consumidores de 06 de diciembre
              de 2013 (en adelante las leyes que regulan este contrato).,
              FORCEONE SYSTEM TECHNOLOGIES S.R.L. (en adelante el responsable)
              emite el presente Aviso de Privacidad en los siguientes términos:
            </p>

            <p>
              Al visitar y/o usar y/o registrarse usted acepta de manera expresa
              el tratamiento de los datos personales que sean recabados a través
              de la Plataforma{" "}
              <a
                href="https://www.condaty.com/login"
                className="text-[#00e38e] underline"
              >
                https://www.condaty.com/login
              </a>{" "}
              así como a través de páginas personalizadas de FORCEONE SYSTEM
              TECHNOLOGIES S.R.L para el Condominio en el cual es residente,
              propietario ó administrador (en lo sucesivo &quot;la Plataforma
              &quot;) de acuerdo con los términos y condiciones establecidos en
              el presente aviso de privacidad (en lo sucesivo el &quot;Aviso de
              Privacidad&quot;).
            </p>

            <p>
              El usuario se compromete a leer, comprender y aceptar todas las
              condiciones establecidas en el presente Aviso de Privacidad, al
              momento de solicitud de registro como Usuario de la Plataforma. En
              caso de no encontrarse de acuerdo con los términos y condiciones
              que se establecen en el presente Aviso de privacidad, debe
              abstenerse de utilizar los Servicios que brinda la Plataforma.
            </p>

            <div>
              <h2 className="text-[#00e38e] font-semibold mb-2">
                I. RESPONSABLE DEL TRATAMIENTO DE DATOS PERSONALES DEL USUARIO
              </h2>
              <p>
                FORCEONE SYSTEM TECHNOLOGIES S.R.L., con domicilio fiscal en
                Calle A, Nro. 1, Barrio Tropical, UV-63, MZA-68B, Ave. Radial
                26, esquina Calle 5, pasando el 4to anillo cinco cuadras cortas,
                casa color blanco, portón café claro, Ciudad de Santa Cruz de la
                Sierra, correo electrónico{" "}
                <a
                  href="mailto:hola@fos.bo"
                  className="text-[#00e38e] underline"
                >
                  hola@fos.bo
                </a>{" "}
                es el responsable del tratamiento de sus datos personales
                recabados a través de la Plataforma{" "}
                <a
                  href="https://www.condaty.com/login"
                  className="text-[#00e38e] underline"
                >
                  https://www.condaty.com/login
                </a>
              </p>
            </div>

            <div>
              <h2 className="text-[#00e38e] font-semibold mb-2">
                II. DATOS PERSONALES QUE SERÁN TRATADOS
              </h2>
              <p className="mb-2">
                FORCEONE SYSTEM TECHNOLOGIES S.R.L podrá recabar los siguientes
                datos personales de forma directa a través de la Plataforma ó de
                forma indirecta a través del administrador del Condominio:
              </p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Nombre y apellidos.</li>
                <li>Número de cédula de identidad y lugar de expedición.</li>
                <li>Dirección de domicilio.</li>
                <li>Teléfonos de contacto.</li>
                <li>Correo electrónico.</li>
                <li>Comentarios.</li>
                <li>
                  Eventos relacionados con el condominio en el cual es
                  residente, propietario u administrador.
                </li>
                <li>
                  Adeudos y pagos de las cuotas del Condominio en el cual es
                  residente, propietario u administrador.
                </li>
                <li>
                  Ingresos y egresos de la administración del condominio en el
                  cual es residente, propietario u administrador.
                </li>
                <li>
                  Anuncios y mensajes de interés relacionados con el Condominio
                  en el cual es residente, propietario u administrador.
                </li>
                <li>Logos o diseños.</li>
                <li>
                  Datos recabados través de cookies: tipo de dispositivo
                  utilizado para acceder a la Plataforma, tipo de navegador,
                  sistema operativo, momento de acceso a la Plataforma, tiempo
                  de navegación en la Plataforma, información consultada.
                </li>
              </ul>
              <p className="mt-2">
                FORCEONE SYSTEM TECHNOLOGIES S.R.L bajo ninguna circunstancia
                recabara Datos Personales Sensibles, en caso de que sea
                necesario recabar alguno de dichos datos se solicitará su
                consentimiento previo de manera expresa.
              </p>
            </div>

            <div>
              <h2 className="text-[#00e38e] font-semibold mb-2">
                III. FINALIDADES DEL TRATAMIENTO DE DATOS PERSONALES
              </h2>
              <p className="mb-2">
                Los datos personales especificados en la sección anterior serán
                utilizados para las siguientes finalidades:
              </p>
              <p className="mb-2 font-medium">
                Finalidades que son necesarias:
              </p>
              <ul className="list-disc pl-6 space-y-1">
                <li>
                  Para contactarlo con la finalidad de comercializar los
                  servicios disponibles a través de la Plataforma
                </li>
                <li>
                  Para la personalización de los servicios disponibles a través
                  de la Plataforma
                </li>
                <li>
                  Para proveerle los servicios y funcionalidades disponibles a
                  través de la Plataforma relacionados con la administración y
                  comunicación del condominio en el cual es residente,
                  propietario u administrador las cuales incluyen:
                  <ul className="list-[circle] pl-6 mt-1 space-y-1">
                    <li>Crear y dar acceso a una cuenta.</li>
                    <li>
                      Enviar y recibir anuncios, mensajes e información a los
                      usuarios relacionados con el condominio.
                    </li>
                    <li>Llevar un historial contable del condominio.</li>
                    <li>Realizar el respaldo de su información.</li>
                    <li>
                      Generar reportes y estadísticas respecto a la
                      administración del condominio y los servicios prestados a
                      través de la Plataforma
                    </li>
                    <li>
                      Identificarlo para proveerle servicios al usuario y como
                      procesar y responder a las que se refieren el presente
                      Aviso de Privacidad.
                    </li>
                    <li>
                      Informarle sobre cambios y/o actualizaciones de la
                      Plataforma, los Términos y Condiciones, y el presente
                      Aviso de Privacidad.
                    </li>
                    <li>
                      Informarle sobre actualizaciones, modificaciones o nuevas
                      funcionalidades de la Plataforma.
                    </li>
                    <li>
                      Evaluar la calidad y funcionalidad de los servicios, de la
                      Plataforma
                    </li>
                    <li>
                      Realizar una lista de clientes y mantener un expediente de
                      cada uno.
                    </li>
                    <li>
                      Ofrecer métodos de ahorro para el condominio y sus
                      residentes.
                    </li>
                    <li>Estudios de mercado no individualizados.</li>
                  </ul>
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-[#00e38e] font-semibold mb-2">
                IV. COMUNICACIÓN
              </h2>
              <p>
                Todas las comunicaciones que se cursen al Usuario, incluyendo
                sin limitación, las que dispongan cambios en las condiciones
                establecidas en los presentes y toda otra condición aplicable
                sobre los Servicios, serán cursadas únicamente a través de la
                Plataforma y/o correo electrónico indicado por el Usuario al
                momento de registrarse.
              </p>
            </div>

            <div>
              <h2 className="text-[#00e38e] font-semibold mb-2">
                V. MEDIOS DE UTILIZACION
              </h2>
              <p>
                Los servicios son prestados a través de internet por medio de la
                Plataforma, mediante el uso de los dispositivos móviles de
                titularidad del Usuario, y con la participación de terceros
                prestadores de servicios complementarios.
              </p>
            </div>

            <div>
              <h2 className="text-[#00e38e] font-semibold mb-2">
                VI. REQUISITOS PARA LA UTILIZACION DE LA PLATAFORMA
              </h2>
              <p>
                El Usuario deberá contar con un dispositivo móvil con acceso a
                internet, haber completado el registro satisfactoriamente y ser
                aprobado por FORCEONE SYSTEM TECHNOLOGIES S.R.L de acuerdo a las
                políticas de alta de Usuarios., detallada en la cláusula DECIMA
                PRIMERA (MEDIOS PARA EJERCER LOS DERECHOS DE ACCESO,
                RECTIFICACIÓN, CANCELACIÓN U OPOSICIÓN). El usuario podrá operar
                desde cualquier dispositivo móvil o Pc. El usuario deberá
                generar un perfil con una contraseña para acceder a la
                Plataforma (en adelante la “Cuenta de Usuario”).
              </p>
            </div>

            <div>
              <h2 className="text-[#00e38e] font-semibold mb-2">
                VII. VALIDEZ
              </h2>
              <p>
                Las transacciones ordenadas por el Usuario únicamente tendrán
                validez en aquellos casos en los que el Usuario utilice los
                medios específicamente determinados por FORCEONE SYSTEM
                TECHNOLOGIES S.R.L al efecto. No tendrán validez alguna, las
                instrucciones formuladas a través de cualquier otro medio
                distinto de los que FORCEONE SYSTEM TECHNOLOGIES S.R.L.
                determine específicamente a través de la Plataforma.
              </p>
              <p className="mt-2">
                FORCEONE SYSTEM TECHNOLOGIES S.R.L podrá utilizar sistemas aptos
                para acreditar la pertenencia de las transacciones cursadas, y
                asimismo declara que aplicará sus mejores esfuerzos y las
                mejores prácticas exigidas por la industria a fin de garantizar
                la seguridad informática de los sistemas y registros empleados.
              </p>
            </div>

            <div>
              <h2 className="text-[#00e38e] font-semibold mb-2">
                VIII. FECHA DE LAS OPERACIONES
              </h2>
              <p>
                Todas las operaciones efectuadas por el Usuario serán
                registradas en la fecha y horario en que efectivamente se
                cursen. En ciertos casos, la fecha u horario de registro de la
                operación podrá ser posterior al momento en que se haya
                solicitado su ejecución, dependiendo del tipo de operación.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
