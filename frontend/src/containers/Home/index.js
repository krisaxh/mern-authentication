import './style.css';
import logo from './assets/logo.svg';

import SessionDisplay from './common/Session';

export default function App() {

    return <div className="container">
        <table>
            <tbody>
                <tr>
                    <td className="tbl_1_1" width="26" height="25"></td>
                    <td className="tbl_1_2" height="25"></td>
                    <td className="tbl_1_3" width="27" height="25"></td>
                </tr>
                <tr>
                    <td className="tbl_2_1"></td>

                    <td className="tbl_2_2">
                        <div className="t_c">
                            <div id="display">
                                <img src={logo} id="logo" alt=""/>
                                <SessionDisplay/>
                            </div>
                        </div>
                        <div id="menu">
                            <div id="buttons">
                                <button onClick={() => window.location="/"}>Home</button>
                                <button onClick={() => window.location="/"}>Page</button>
                                <button onClick={() => window.location="/"}>Page</button>
                                <button onClick={() => window.location="/"}>Page</button>
                                <button onClick={() => window.location="/"}>Page</button>
                                <button onClick={() => window.location="/"}>Page</button>
                            </div>
                        </div>
                        <table className="mainouter" cellSpacing="0" cellPadding="10">

                        </table>

                        <div className="b_c">
                            <a href="https://github.com/krisaxh/mern-authentication" id="hyperlink"
                            target="_blank" rel="noreferrer">https://github.com/krisaxh/mern-authentication</a>
                        </div>

                    </td>

                    <td className="tbl_2_3"></td>
                </tr>
                <tr>
                    <td className="tbl_3_1"></td>
                    <td className="tbl_3_2"></td>
                    <td className="tbl_3_3"></td>
                </tr>
            </tbody>
        </table> 
    </div>
}