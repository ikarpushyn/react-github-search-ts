import styles from './Search.module.scss';
import { ReactComponent as SearchIcon } from 'assets/icon-search.svg';
import { Button } from 'components/Button';

interface SearchProps {
	hasError: boolean;
	onSubmit: (text: string) => void;
}

type FormField = {
	username: HTMLInputElement;
};

export const Search = ({ hasError, onSubmit }: SearchProps) => {
	const handleSubmit = (e: React.FormEvent<HTMLFormElement & FormField>) => {
		e.preventDefault();
		const text = e.currentTarget.username.value;

		if (text.trim()) {
			onSubmit(text);
			e.currentTarget.reset();
		}
	};

	return (
		<form onSubmit={handleSubmit}>
			<div className={styles.search}>
				<label htmlFor="search">
					<SearchIcon />
				</label>
				<input
					autoComplete="off"
					type="text"
					name="username"
					id="search"
					placeholder="Search GitHub username..."
					className={styles.textField}
				/>
				{hasError && <div className={styles.error}>No results</div>}
				<Button>Search</Button>
			</div>
		</form>
	);
};
