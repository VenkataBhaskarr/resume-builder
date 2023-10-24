
export const SectionWrapper = ({ children, title }) => (
    <>
        <h2 className="mt-1">{title}</h2>
        <hr className="border-solid border-1" />

        <div className="mt-half">{children}</div>
    </>
);