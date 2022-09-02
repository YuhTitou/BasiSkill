// import Fade from 'react-reveal/Fade';

const navbar =(
    <div>
        <nav>
            <ul>
                <div id="logo">
                    <li>
                        <a href="index.html">
                            <img src="./img/ltlogo.svg" width="65px"/>
                        </a>
                    </li>
                </div>
                <div id="option">
                    <li><a href="work.html">Work</a></li>
                    <li><a href="creation.html">Creation</a></li>
                    <li><a href="communication.html">Communication</a></li>
                    <li><a href="cybersecurity.html">Cybersecurity</a></li>
                </div>
                <div id="connexion">
                    <li><button id="log"><a href="login.html">Log in</a></button></li>
                    <li><button id="sign"><a href="signup.html">Sign up</a></button></li>
                </div>
            </ul>
        </nav>
    </div>
);


ReactDOM.render( navbar ,document.getElementById("root"));




// class work extends React.Component {
//     render() {
//       return (
//         <div>
//           <Fade left>
//           <a href="work.html">
//             <div id="zonew">
//                 <img src="./img/student-849825_960_720.jpg"/>
//                 <div id="workcenter">
//                     <h1 id="w_title">Work</h1>
//                     <p>You don’t really know how to work properly with a computer and you don’t know what you are able to do with it ? With this section, you will learn how to access at informations online and become familiar with the concept of the internet.
//                         You will also learn what is a computer and the primary parts of a computer.</p>
//                 </div>

//             </div>
//         </a>
//           </Fade>
//         </div>
//       );
//     }
//   }

// export default work;