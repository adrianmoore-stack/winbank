import { NavLink } from 'react-router-dom';
import classtype from './History.module.css';

const SubNavigation = ({ args, className }) => {
  return (
    <header className={`${classtype.dashHistory} ${className}`}>
      <ul>
        <li className={classtype.listItems}>
          <NavLink
            className={({ isActive }) => (isActive ? classtype.active : '')}
            to={args[0].split(' ').join('').toLowerCase()}
          >
            {args[0]}
          </NavLink>
        </li>
        {args[1] && (
          <li className={classtype.listItems}>
            <NavLink
              className={({ isActive }) => (isActive ? classtype.active : '')}
              to={args[1].split(' ').join('').toLowerCase()}
            >
              {args[1]}
            </NavLink>
          </li>
        )}
        {args[2] && (
          <li className={classtype.listItems}>
            <NavLink
              className={({ isActive }) => (isActive ? classtype.active : '')}
              to={args[2].split(' ').join('').toLowerCase()}
            >
              {args[2]}
            </NavLink>
          </li>
        )}
      </ul>
    </header>
  );
};

export default SubNavigation;
