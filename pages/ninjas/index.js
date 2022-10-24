import styles from "../../styles/User.module.css";
import Link from "next/link";

export const getStaticProps = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await response.json();
  return {
    props: { users },
  };
};

const Ninjas = ({ users }) => {
  return (
    <div>
      <h1>All Ninjas</h1>
      {users.map((user) => (
        <Link href={`/ninjas/${user.id}`} key={user.id}>
          <a className={styles.single}>
            <h3>{user.name}</h3>
          </a>
        </Link>
      ))}
    </div>
  );
};

export default Ninjas;
