import React from 'react';
import { MdCoronavirus } from 'react-icons/md';

export default function Home() {
  return (
    <div>
      <div value={{ style: { height: 10 } }}>
        <MdCoronavirus />
      </div>
      <div className="pa4">
        <div className="overflow-auto">
          <table className="f6 w-100 mw8 center" cellSpacing="0">
            <thead>
              <tr className="stripe-dark">
                <th className="fw6 tl pa3">N</th>
                <th className="fw6 tl pa3">U</th>
                <th className="fw6 tl pa3">E</th>
                <th className="fw6 tl pa3">ID</th>
              </tr>
            </thead>
            <tbody className="lh-copy">
              <tr classame="stripe-dark">
                <td className="pa3">Ha</td>
                <td className="pa3">san</td>
                <td className="pa3">co</td>
                <td className="pa3">14419232532474</td>
              </tr>
              <tr className="stripe-dark">
                <td className="pa3">Taral Hicks</td>
                <td className="pa3">ks</td>
                <td className="pa3">ongdomain.co</td>
                <td className="pa3">72326219423551</td>
              </tr>
              <tr className="stripe-dark">
                <td className="pa3">Tyrin Turner</td>
                <td className="pa3">@tt</td>
                <td className="pa3">ty@companywithalongdomain.co</td>
                <td className="pa3">92325170324444</td>
              </tr>
              <tr className="stripe-dark">
                <td className="pa3">Oliver Grant</td>
                <td className="pa3">d</td>
                <td className="pa3">o</td>
                <td className="pa3">71165170352909</td>
              </tr>
              <tr className="stripe-dark">
                <td className="pa3">Dean Blanc</td>
                <td className="pa3"> h</td>
                <td className="pa3">d</td>
                <td className="pa3">71865178111909</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
