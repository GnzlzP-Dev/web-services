import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function servicios() {
  const empresa = "MANPEG";
  return (
    <div className="mx-5">
      <h1 className="font-bold text-2xl">
        Nuestros Servicios de Mantenimiento de Sistemas de Detección de Incendio
      </h1>

      <Image
        width={600}
        height={300}
        alt="Inspeccion general"
        src={"/inspeccion.webp"}
        loading="lazy"
      />
      <div className="p-5 w-9/12 justify-center">
        <p>
          En {empresa}, estamos comprometidos con la seguridad y la protección
          de lo que más importa para ti. Nuestros servicios de mantenimiento de
          sistemas de detección de incendio están diseñados para garantizar que
          tu hogar, negocio o instalaciones estén preparados para enfrentar
          cualquier emergencia. Aquí tienes un vistazo a lo que ofrecemos:
        </p>
        <br />
        <h2>Inspecciones Rutinarias:</h2>
        <p>
          Nuestros técnicos altamente capacitados realizan inspecciones
          exhaustivas de tu sistema de detección de incendio. Comprobamos todos
          los componentes, desde detectores de humo y alarmas hasta sistemas de
          supresión, para garantizar su funcionamiento óptimo.
        </p>
        <h2>Cumplimiento de Normas:</h2>
        <p>
          Nos enorgullece cumplir estrictamente con las normas y estándares de
          seguridad de la Asociación Nacional de Protección contra Incendios
          (NFPA) y otras regulaciones locales y nacionales. Esto garantiza que
          tu sistema cumple con los requisitos más rigurosos.
        </p>
        <h2>Actualizaciones y Mejoras:</h2>
        <p>
          Mantener tu sistema al día es esencial para la seguridad continua.
          Ofrecemos servicios de actualización y mejoras para asegurarnos de que
          tu sistema esté equipado con las últimas tecnologías y características
          de detección.
        </p>
        <h2>Reparaciones Rápidas:</h2>
        <p>
          Si tu sistema de detección de incendio experimenta algún problema,
          estamos listos para intervenir rápidamente. Nuestros técnicos expertos
          identificarán y solucionarán cualquier problema para garantizar la
          protección ininterrumpida.
        </p>
        <h2>Asesoramiento Técnico:</h2>
        <p>
          No solo mantenemos tus sistemas, sino que también te ofrecemos
          asesoramiento técnico. Nuestro equipo te proporcionará recomendaciones
          para mejorar la seguridad de tus instalaciones.
        </p>
        <h2>Mantenimiento Preventivo:</h2>
        <p>
          La prevención es clave en la seguridad contra incendios. Nuestro
          programa de mantenimiento preventivo te ayuda a evitar problemas antes
          de que ocurran, lo que puede ser crucial en situaciones de emergencia.
        </p>
        <br />
        <p>
          En {empresa}, la seguridad es nuestra prioridad número uno. Confía en
          nuestros servicios de mantenimiento de sistemas de detección de
          incendio para brindarte la tranquilidad que necesitas y garantizar la
          protección de lo que más valoras. Estamos aquí para ayudarte a estar
          preparado en caso de cualquier eventualidad.
        </p>
        <p></p>
        <p>
          ¡Ponte en contacto con nosotros hoy para obtener más información o
          programar una inspección de tu sistema de detección de incendio!
        </p>
        <p>
          [Teléfono de Contacto] | [Correo Electrónico] | [Enlaces a Redes
          Sociales]
        </p>
      </div>
    </div>
  );
}
