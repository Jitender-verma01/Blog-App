
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBlog } from '@fortawesome/free-solid-svg-icons';
function Logo({ width = '100px' }) {
  return (
    <div>
      <FontAwesomeIcon icon={faBlog} />
      
    </div>
  );
}
export default Logo;
