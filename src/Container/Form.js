import { useSelector, useDispatch } from 'react-redux'
import { changeParagraph, changeIncludeHTML, value } from '../redux/paragraphSlice'

function Form() {
    const count = useSelector(value);
    const dispatch = useDispatch();

    if(count < 1) {
        window.alert("You cannot enter a value less than one!")
        dispatch(changeParagraph(1))
    }

    return (
        <div className="form">
            <div className="form__group">
                <span className="form__group-text">Paragraphs</span>
                <input className="form__group-input" type="number" value={count} onInput={e => dispatch(changeParagraph(e.target.value))}/>
            </div>
            <div className="form__group">
                <span className="form__group-text">Include HTML</span>
                <select className="form__group-input" name="html" onChange={e => dispatch(changeIncludeHTML(e.target.value))}>
                    <option value="no">No</option>
                    <option value="yes">Yes</option>
                </select>
            </div>
        </div>
    )
}

export default Form
