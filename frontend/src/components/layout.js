import { Outlet } from 'react-router-dom';
import Nav from './nav';
import Nav3 from './nav3';
import Footer from "./footer";


function layout() {
  return (
    <div>
      <Nav3 />
      <main>
        <Outlet>
          {/* <Outlet /> */}
        </Outlet>
      </main>
      <Footer />

    </div>
  );
};

export default layout;