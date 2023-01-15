import React, { useContext } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route, useNavigate, Navigate } from "react-router-dom";

import New from "./components/Pages/New";
import Home from "./components/Home/Home";
import Login from "./components/Pages/Login";
import Single from "./components/Pages/Single";
import List from "./components/Table/Table";
import { HotelInputs, RoomInputs, userInputs } from "./components/formsource";
import Lists from "./components/List/List";
import BNavbar from "./BookingApp/BNavbar";
import Search from "./BookingApp/Search/Search";
import SingleSer from "./BookingApp/SingleSer/SingleSer";
import { AuthContextadmin } from "./components/Context/AuthContext";
import { AuthContext } from "./BookingApp/Context/AuthContext";
import { usercolumns, hotelcolumns, roomcolumns } from "./components/DataTablesource";
import BookingLogin from "./BookingApp/Login";

function App() {
 
  // const navigate = useNavigate();
  const ProtectedRoute = ({children})=>{
const {user} = useContext(AuthContext)  
// console.log('user',user)
if(!user){
  return <Navigate to='/admin/login'/>
  
}
console.log(user)
if(user?.isAdmin){

  return children
}
if(!user?.isAdmin){
  return <div>You are not authorized</div>
}

}
  return (
    <div className="App">
      <BrowserRouter>
        {/* <Nav /> */}
        <Routes>
          <Route path="/">
              <Route index element={<BNavbar />} />
              <Route exact path="login" element={<BookingLogin/>} />

              <Route path="Search">
                <Route index element={<Search />} />
                <Route exact path=":userid" element={<SingleSer />} />
              </Route>

            <Route path="admin">
              <Route exact path="login" element={<Login />} />
              <Route index element={
                <ProtectedRoute>
                <Home />
          </ProtectedRoute>
                } />

            

            <Route path="user">
              <Route index element={<ProtectedRoute>
                <Lists columns={usercolumns}/>
          </ProtectedRoute>} />
              <Route exact path=":userid" element={<ProtectedRoute>
                <Single />
          </ProtectedRoute>} />
              <Route
                exact
                path="new"
                element={<ProtectedRoute>
                <New title="Add new User" inputs={userInputs} url="user"/>
                </ProtectedRoute>}
              />
            </Route>
            <Route path="hotel">
              <Route index element={<ProtectedRoute>
              <Lists columns={hotelcolumns}/>
              </ProtectedRoute>
            } />
              <Route exact path=":userid" element={<ProtectedRoute>
              <Single />
              </ProtectedRoute>} />
              <Route
                exact
                path="new"
                element={<ProtectedRoute>
                <New title="Add new Hotel" inputs={HotelInputs} url="hotel" />
                </ProtectedRoute>}
              />
            </Route>
            <Route path="room">
              <Route index element={<ProtectedRoute>
              <Lists columns={roomcolumns}/>
              </ProtectedRoute>
            } />
              <Route exact path=":userid" element={<ProtectedRoute>
              <Single />
              </ProtectedRoute>} />
              <Route
                exact
                path="new"
                element={<ProtectedRoute>
                <New title="Add new Room" inputs={RoomInputs} url="room"/>
                </ProtectedRoute>}
              />
            </Route>

          </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
