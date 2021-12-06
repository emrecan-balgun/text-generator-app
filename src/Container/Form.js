import { useSelector, useDispatch } from 'react-redux'
import { changeParagraph, value } from '../redux/paragraphSlice'

function Form() {
    const count = useSelector(value);
    const dispatch = useDispatch();

    return (
        <div className="form">
            <div className="form__group">
                <span className="form__group-text">Paragraphs</span>
                <input className="form__group-input" type="number" value={count} onInput={e => dispatch(changeParagraph(e.target.value))}/>
            </div>
            <div className="form__group">
                <span className="form__group-text">Include HTML</span>
                <select className="form__group-input" name="html">
                    <option value="yes">Yes</option>
                    <option value="no">No</option>
                </select>
            </div>
        </div>
    )
}

export default Form
