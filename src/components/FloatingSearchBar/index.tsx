import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import './styles.css';

interface Props {
    onSearch: (searchText: string) => void;
}

const FloatingSearchBar = (props: Props) => {
    const { onSearch } = props;
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearch = () => {
        onSearch(searchTerm);
        console.log('Searching for:', searchTerm);
    };

    return (
        <div className="floating-search-bar" data-testid="floating-search-bar">
            <div className="search-form">
                <div className="search-icon-divider">
                    <FontAwesomeIcon className="search-icon" icon={faSearch} />
                </div>
                <input
                    className="floating-search-bar-input"
                    type="text"
                    placeholder="Search Members by Name..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                <button onClick={handleSearch}>Search</button>
            </div>
        </div>
    );
};

export default FloatingSearchBar;
