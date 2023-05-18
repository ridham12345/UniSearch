import UniHeader from "../UniHeader/UniHeader";
import UniMenu from "../UniMenu/UniMenu";
import Menu from "../Menu/Menu";
import { useDispatch, useSelector } from 'react-redux';
const UniFaq = () => {
    //add background color to screen
    document.body.classList.add('grey')
    const uniDetsById = useSelector(state => state.uniWithId)
    return (
        <>
         <Menu />
            <div className="UniContainer">
                <UniHeader />
                <div className="bodyContainer">
                    <UniMenu />
                    <div className="courseContainer">
                        <h2>FAQs</h2>
                        <div>
                            {
                                // map the questions and answers of the university
                                uniDetsById.faq.map((el) => (
                                    <div className="faqContainer">
                                    <div className="question">Q: {el.question}</div>
                                    <div className="answer">A: {el.answer}</div>
                                </div>
                                ))
                            }
                            
                        </div>
                    </div>
                </div>
            </div>
        </>
       
    )
}
export default UniFaq;