import React, { useState } from 'react';
import styled from 'styled-components';
import avatar from '../../img/avatar.png';
import { signout } from '../../utils/Icons';
import { menuItems } from '../../utils/menuItems';
import { useNavigate } from 'react-router-dom';

function Navigation({ active, setActive }) {
  const [hoveredItem, setHoveredItem] = useState(null);
  const [tagPosition, setTagPosition] = useState({ x: 0, y: 0 });
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  const handleMouseEnter = (item, event) => {
    setHoveredItem(item);
    const rect = event.target.getBoundingClientRect();
    setTagPosition({
      x: rect.left + rect.width + 10,
      y: rect.top - 4,
    });
  };

  const handleMouseLeave = () => {
    setHoveredItem(null);
  };

  return (
    <NavStyled>
      <div className="sidebar">
        <div className="user-con">
          <img
            src={avatar}
            alt="User Avatar"
            title={`Hello`}
            onClick={handleedit}
          />
        </div>
        <ul className="menu-items">
          {menuItems.map((item) => (
            <li
              key={item.id}
              onClick={() => setActive(item.id)}
              className={active === item.id ? 'active' : ''}
              onMouseEnter={(e) => handleMouseEnter(item, e)}
              onMouseLeave={handleMouseLeave}
            >
              <div className="icon-container">
                {item.icon}
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div
        className={`tag ${hoveredItem ? 'show' : ''}`}
        style={{ left: `${tagPosition.x}px`, top: `${tagPosition.y}px` }}
      >
        {hoveredItem && (
          <div className="tag-content">
            {hoveredItem.icon}
            <span className="label">{hoveredItem.title}</span>
          </div>
        )}
      </div>
      <div className="bottom-nav">
        <li>
          <div className="icon-container" onClick={handleLogout}>
            {signout}
          </div>
        </li>
      </div>
    </NavStyled>
  );
}

const NavStyled = styled.nav`
  width: 60px; /* Width of the sidebar */
  min-height: 100vh; /* Make it full height */
  background-color: #1A1A1D;
  display: flex;
  flex-direction: column;
  justify-content: space-between; /* Push the bottom nav to the bottom */
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  box-shadow: 2px 0px 4px rgba(0, 0, 0, 0.1);

  .sidebar {
    padding: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;

    .user-con {
      display: flex;
      align-items: center;
      flex-direction: column; /* Center align text vertically */
      gap: 1rem;

      img {
        width: 60px; /* Increase avatar size */
        height: 60px;
        border-radius: 50%;
        object-fit: cover;
        background: #2d3147;
        border: 2px solid #1d2536;
        padding: 0.2rem;
        box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.3);
      }

      h2 {
        color: #fff;
        font-size: 1rem;
        margin: 0;
      }

      p {
        color: rgba(255, 255, 255, 0.6);
        font-size: 0.8rem;
        margin: 0;
      }
    }

    .menu-items {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      list-style: none;
      margin: 0;
      padding: 0;

      li {
        display: flex;
        align-items: center;
        cursor: pointer;
        transition: all 0.3s ease-in-out;
        color: #fff;

        .icon-container {
          display: flex;
          align-items: center;
          justify-content: center; /* Center align the icon horizontally */
          width: 40px; /* Adjust the width of the menu item */
          height: 40px; /* Adjust the height of the menu item */
          background-color: #2e3a51; /* Background color for menu items */
          border-radius: 50%; /* Make it oval */
          cursor: pointer;
          transition: all 0.3s ease-in-out;

          i {
            color: rgba(255, 255, 255, 0.8);
            font-size: 1rem;
            transition: all 0.3s ease-in-out;
          }
        }

        &:hover {
          .icon-container {
            background-color: #C3073F; /* Change background color on hover */
            i {
              color: black; /* Change icon color on hover */
            }
          }
        }

        &.active {
          /* Change color for active menu item */
          .icon-container {
            background-color: #C3073F;
            i {
              color: black;
            }
          }
        }
      }
    }
  }

  .bottom-nav {
    padding: 1rem;

    li {
      display: flex;
      align-items: center;
      cursor: pointer;
      color: WHITE;
      font-weight: 500;

      .icon-container {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 40px;
        height: 40px;
        background-color: BLACK;
        border-radius: 50%;
        cursor: pointer;
        transition: all 0.3s ease-in-out;

        i {
          color: rgba(255, 255, 255, 0.6);
          font-size: 1rem;
          transition: all 0.3s ease-in-out;
        }
      }

      &:hover {
        .icon-container {
          background-color: #C3073F;
          i {
            color: black;
          }
        }
      }
    }
  }

  .tag {
    position: absolute;
    background-color: #C3073F;
    padding: 8px;
    border-radius: 4px;
    transition: opacity 0.3s ease-in-out;
    opacity: 0;
    pointer-events: none;
    z-index: 1;

    .tag-content {
      display: flex;
      align-items: center;
      gap: 8px;

      .label {
        color: black;
        font-size: 14px;
        margin: 0;
      }
    }
  }

  .tag.show {
    opacity: 1;
  }
`;

export default Navigation;
