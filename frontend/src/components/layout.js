import { Outlet } from 'react-router-dom';
import Nav from './nav';
import Footer from "./footer";


function layout() {
  return (
    <div>
      <Nav />
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