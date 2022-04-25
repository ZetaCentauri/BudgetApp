import { faBorderNone } from "@fortawesome/free-solid-svg-icons";

const SubCategory = ({subTitle, amount}) => {

   
return (
    <>
    <div className="expenses-list__subcategory">
                <div className="expenses-list__subcategory--name">{subTitle}</div>
                <div className="expenses-list__subcategory--sum"><span>{amount}</span> zł
                <button className="btn category_btn" style={{display: "inline"}}>+</button>
                </div>
    </div>
    </>
)
}

export default SubCategory;