function SectionWrapper({ title, children }){
     return (
         <div>
             <h2 className="mt-1 text-2xl">{title}</h2>
             <hr className="border-solid border-1" />
             <div className="mt-half">{children}</div>
         </div>
     )
}

export default SectionWrapper