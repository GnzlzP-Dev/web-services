import Form from "@/components/form";

export default function Contacto() {
  return (
    <>
      <div className="flex justify-around">
        <div>
          <p className="font-bold text-2xl ">Acá se muestran los contactos</p>
          <Form />
        </div>
        <div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63458.35966245345!2d-75.62241113932045!3d6.244287171781992!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e4428dfb80fad05%3A0x42137cfcc7b53b56!2sMedell%C3%ADn%2C%20Antioquia!5e0!3m2!1ses!2sco!4v1709775976379!5m2!1ses!2sco"
            width='500'
            height='300'
            // className="sm:{w-300 h-200}"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
          {/* <iframe
            width="425"
            height="350"
            src="https://www.openstreetmap.org/export/embed.html?bbox=-75.65992355346681%2C6.168374318738097%2C-75.54319381713869%2C6.3199052489317555&amp;layer=mapnik"
            // style="border: 1px solid black"
          ></iframe>
          <br />
          <small>
            <a href="https://www.openstreetmap.org/#map=13/6.2441/-75.6016">
              Ver el mapa más grande
            </a>
          </small> */}
        </div>
      </div>
    </>
  );
}
