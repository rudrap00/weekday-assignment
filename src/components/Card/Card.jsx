import styles from "./Card.module.scss";
import salaryStructure from "./constants";

const Card = ({ data }) => {
  const {
    companyName,
    jdLink,
    jobDetailsFromCompany: details,
    jobRole,
    location,
    maxJdSalary: maxSalary,
    minJdSalary: minSalary,
    salaryCurrencyCode: currencyCode,
    minExp,
    maxExp,
    logoUrl,
  } = data;

  const salaryString = salaryStructure(minSalary, maxSalary);

  return (
    <div className={styles["card-container"]}>
      <div className={styles.header}>
        <div className={styles["img-container"]}>
          <img src={logoUrl} alt="company-logo" loading="lazy" />
        </div>
        <div className={styles.details}>
          <div>{companyName}</div>
          <div>{jobRole}</div>
          <div>{location}</div>
        </div>
      </div>
      <div className={styles.salary}>
        Estimated Salary: {salaryString ? "$" + salaryString : ""}
      </div>
      <div className={styles.body}>
        <div className={styles.company}>
          About Company:
          <div>
            <b>About Us</b> <br />
            {details}
          </div>
          <div className={styles.view}>
            <a href={jdLink}>View Job</a>
          </div>
        </div>
      </div>
      <div className={styles["exp-container"]}>
        Minimum Experience
        {minExp && (
          <div>{minExp > 1 ? minExp + " years" : minExp + " year"}</div>
        )}
      </div>
      <div className={styles.buttons}>
        <button>Easy Apply</button>
        <button>Unlock referral asks</button>
      </div>
    </div>
  );
};

export default Card;
