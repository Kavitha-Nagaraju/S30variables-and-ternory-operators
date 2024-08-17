import React from 'react'

function MarksSheet(props){
    let telugumarks = Number(props.telugumarks);
    let englishmarks = Number(props.englishmarks);
    let hindhimarks = Number(props.hindhimarks);
    let mathsmarks = Number(props.mathsmarks);
    let physicsmarks = Number(props.physicsmarks);
    let socialmarks = Number(props.socialmarks);

    let total=telugumarks+englishmarks+hindhimarks+mathsmarks+physicsmarks+socialmarks;
    return(
        <div> 
            <caption>{props.name}MarksSheet</caption>
            <table>

                <thead>
                     <th> S.No</th>
                     <th>SUBJECTS</th>
                     <th>MAX.MARKS</th>
                     <th>OBTAINED.MARKS</th>
                     <th>RESULT</th>
                     <th>REMARKS</th>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>TELUGU</td>
                        <td rowspan="6">100</td>
                        <td>{telugumarks}</td>
                        <td>{telugumarks >=35? "Pass":"Fail"}pass</td>
                        <td>Excellent</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>ENGLISH</td>
                        <td>{englishmarks}</td>
                        <td>{englishmarks >=35? "Pass":"Fail"}</td>
                        <td>Good</td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>HINDHI</td>
                        <td>{hindhimarks}</td>
                        <td>{hindhimarks>=35? "Pass":"Fail"}</td>
                        <td>Average</td>
                    </tr>
                    <tr>
                        <td>4</td>
                        <td>MATHS</td>
                        <td>{mathsmarks}</td>
                        <td>{mathsmarks>=35? "Pass":"Fail"}</td>
                        <td>Average</td>
                    </tr>
                    <tr>
                        <td>5</td>
                        <td>PHYSICS</td>
                        <td>{physicsmarks}</td>
                        <td>{physicsmarks>=35?"Pass":"Fail"}</td>
                        <td>Excellent</td>
                    </tr>
                    <tr>
                        <td>6</td>
                        <td>SOCIAL</td>
                        <td>{socialmarks}</td>
                        <td>{socialmarks>=35? "Pass":"Fail"}</td>
                        <td>Excellent</td>
                    </tr>
                </tbody>
                <tfoot>
                    <th></th>
                    <th>Total</th>
                    <th>600</th>
                    <th>{total}</th>
                </tfoot>
                
            </table>

        </div>
    )
}
export default MarksSheet