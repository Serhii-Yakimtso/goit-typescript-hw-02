import { MagnifyingGlass } from 'react-loader-spinner';
import css from './Loader.module.css';

export default function Loader() {
  return (
    <div>
      <MagnifyingGlass
        className={css.icon}
        visible={true}
        height="80"
        width="80"
        ariaLabel="magnifying-glass-loading"
        wrapperStyle={{}}
        wrapperClass="magnifying-glass-wrapper"
        glassColor="#c0efff"
        color="#e15b64"
      />
    </div>
  );
}
