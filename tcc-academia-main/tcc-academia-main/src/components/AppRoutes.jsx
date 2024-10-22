import { Routes, Route } from "react-router-dom"

import Hero from "../components/home/hero/Hero"
import Profile from "../components/admin/profile/ProfileDetails"


const AppRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/profile" element={<Profile />} />
        

    

        

      </Routes>
    </div>
  )
}
export default AppRoutes