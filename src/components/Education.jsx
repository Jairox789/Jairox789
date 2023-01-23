import React, { Component } from "react";
import { EducationItems } from "./EducationItems";
import "./styles/Education.css";

class Education extends Component {
    state = {
        dataSchools: [
            {
                image: "https://www.uat.edu.mx/SiteAssets/siglas-UAT.png",
                name: "Universidad Autónoma de Tamaulipas",
                fechas: "2019-Actual",
                info: "Estudio en la Universidad Autónoma de Tamaulipas en la carrera de ingeniería en sistemas computacionales, durante mis estudios he aprendido diversas tecnologías para programación y bases de datos estructuradas, además de haber construido diversos proyectos de manera colaborativa que me ayudaron a formar mis conocimientos como desarrollador.",
                images: ['https://i.ibb.co/1L1XR3h/consejo.jpg', "https://i.ibb.co/L10j2w6/cont.jpg", "https://i.ibb.co/SnL05Hp/tec.jpg"]
            },
            {
                image: "https://static.platzi.com/static/images/footer/logo.png",
                name: "Platzi",
                fechas: "2022-Actual",
                info: "Estudio en la plataforma educativa Platzi Academy en la ruta de desarrollo web donde he aprendido diversas tecnologías para el desarrollo web como HTML, CSS y Java Script y sigo construyendo más conocimientos.",
                images: ['https://i.ibb.co/Qv49WMD/1.jpg', 'https://i.ibb.co/ZMQQ9DJ/2.jpg', 'https://i.ibb.co/cQzPBmd/3.jpg', 'https://i.ibb.co/h9p4812/4.jpg', 'https://i.ibb.co/9YVS8f3/5.jpg', 'https://i.ibb.co/h8bd1dZ/6.jpg', 'https://i.ibb.co/QfjKc11/7.jpg', 'https://i.ibb.co/FqqwstQ/8.jpg', 'https://i.ibb.co/bKhJvLf/9.jpg', 'https://i.ibb.co/G2s4qz9/10.jpg', 'https://i.ibb.co/L129CLW/11.jpg', 'https://i.ibb.co/zSCvPxS/12.jpg', 'https://i.ibb.co/fYZJqZc/13.jpg', 'https://i.ibb.co/YRJDMgj/14.jpg', 'https://i.ibb.co/mtVY43S/15.jpg', 'https://i.ibb.co/rvR84B0/16.jpg',]
            },
            {
                image: "https://i.ibb.co/ZzFBT1K/IHM.png",
                name: "Instituto Heroica Matamoros",
                fechas: "2022-Actual",
                info: "Estudio en el Instituto de Heroica Matamoros donde estoy aprendiendo inglés de manera gramatical y conversacional.",
                images: ['https://cdn-icons-png.flaticon.com/512/5229/5229377.png']
            }
        ]

    };
    render() {
        return (
            <React.Fragment>
                <div className="Education">
                    <h1>Educación</h1>
                </div>
                <div className="Educations">
                    {this.state.dataSchools.map(dataSchool => (
                        <EducationItems
                            image={dataSchool.image}
                            name={dataSchool.name}
                            fechas={dataSchool.fechas}
                            info={dataSchool.info}
                            images={dataSchool.images}
                        />
                    ))}
                </div>
            </React.Fragment>
        );
    }
}

export { Education };