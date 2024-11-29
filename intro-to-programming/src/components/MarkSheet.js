import React from 'react'

function MarkSheet() {
  return (
    <div >
      <table>
        <caption>Bharath Mark Sheet</caption>
        <thead>
          <tr>
          <th>Subject</th>
          <th>Max Marks</th>
          <th>Pass Marks</th>
          <th>Marks Obtsined</th>
          <th>Result</th>
          </tr>
          </thead>
        <tbody>
        <tr>
          <td>English</td>
          <td>100</td>
          <td>35</td>
          <td>80</td>
          <td>Pass</td>
          </tr>
          <tr>
          <td>Maths</td>
          <td>100</td>
          <td>35</td>
          <td>70</td>
          <td>Pass</td>
          </tr>
          <tr>
          <td>Social</td>
          <td>100</td>
          <td>35</td>
          <td>80</td>
          <td>PAss</td>
          </tr>
          <tr>
          <td>Science</td>
          <td>100</td>
          <td>35</td>
          <td>45</td>
          <td>Pass</td>
          </tr>
          <tr>
          <td>Telugu</td>
          <td>100</td>
          <td>35</td>
          <td>97</td>
          <td>Pass</td>
          </tr>
          <tr>
          <td>Hindi</td>
          <td>100</td>
          <td>35</td>
          <td>58</td>
          <td>Pass</td>
          </tr> 
        </tbody>
        <tfoot>
          <tr><th colSpan={3}>Total Marks</th>
          {/* <th>600</th>
          <th>210</th> */}
          <th>420</th>
          <th>PAss</th>
          </tr>
        </tfoot>
      </table>
    </div>
  )
}

export default MarkSheet
