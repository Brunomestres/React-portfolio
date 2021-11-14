import React, { useRef } from "react";
import "./style.css";
import Phone from "../../img/phone.png";
import Email from "../../img/email.png";
import Address from "../../img/address.png";
const Contact = () => {
  const formRef = useRef() as React.MutableRefObject<HTMLFormElement>;
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  }
  return (
    <div className="c">
      <div className="c-bg"></div>
      <div className="c-wrapper">
        <div className="c-left">
          <h1 className="c-title">Lets discuss your project</h1>
          <div className="c-info">
            <div className="c-info-item">
              <img src={Phone} alt="" className="c-icon" />
              +55 (71)3398-5419
            </div>
          </div>
          <div className="c-info">
            <div className="c-info-item">
              <img src={Email} alt="" className="c-icon" />
              brunomestres@mail.com
            </div>
          </div>
          <div className="c-info">
            <div className="c-info-item">
              <img src={Address} alt="" className="c-icon" />
              Brasil, São Paulo
            </div>
          </div>
        </div>
        <div className="c-right">
          <p className="c-desc">
            <b>Lorem ipsum, dolor sit amet</b> consectetur adipisicing elit.
            Unde odio dolor maiores quisquam suscipit pariatur, perspiciatis
            tempora repellat ea, delectus corporis.
          </p>
          <form ref={formRef} onSubmit={handleSubmit}>
            <input type="text" placeholder="Nome" name="user_name" />
            <input type="text" placeholder="Assunto" name="user_subject" />
            <input type="text" placeholder="Email" name="user_email" />
            <textarea
              name="message"
              placeholder="Mensagem"
              cols={30}
              rows={5}
            ></textarea>
            <button>enviar</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export { Contact };
