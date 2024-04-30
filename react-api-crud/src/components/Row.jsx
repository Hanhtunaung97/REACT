import React from "react";
import DeleteRowBtn from "./DeleteRowBtn";
import EditRowBtn from "./EditRowBtn";

const Row = ({ course: { id, title, short_name, fee } }) => {
  return (
    <tr className=" odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
      <th
        scope="row"
        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white record-id"
      >
        {id}
      </th>
      <td className="px-6 py-4 editable-cell record-title ">{title}</td>
      <td className="px-6 py-4 editable-cell record-short-name">
        {short_name}
      </td>
      <td className="px-6 py-4 editable-cell record-fee text-end">{fee}</td>
      <td className="px-6 py-4 text-end whitespace-nowrap flex gap-2 justify-end">
        <EditRowBtn id={id} />
        <DeleteRowBtn id={id} />
      </td>
    </tr>
  );
};

export default Row;
