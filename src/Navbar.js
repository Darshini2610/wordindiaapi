import React from 'react';
import { useLocation, Link } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();
  const currentPath = location.pathname.split('/')[1];

  const links = [
    { path: '/', id: 'home' },
    { path: '/additem', id: 'additem' },
  ];

  return (
    <footer className="bg-gray-800 text-white py-6 mt-20">
      <div className="container mx-auto flex justify-center space-x-4">
        {links.map(link => (
          <Link key={link.id} to={link.path}>
            <span
              className={`dot ${currentPath === link.id ? 'active' : ''}`}
              style={{
                width: '10px',
                height: '10px',
                backgroundColor: currentPath === link.id ? 'blue' : 'white',
                borderRadius: '50%',
                display: 'inline-block',
                marginRight: '8px'
              }}
            ></span>
          </Link>
        ))}
      </div>
    </footer>
  );
};

export default Navbar;
