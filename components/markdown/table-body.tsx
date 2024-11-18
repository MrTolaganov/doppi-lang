import React from "react";
import { avfzalKamchilik } from "@/lib/component-utils";

interface AvfzalKamchilikItem {
    title: string;
    description: string;
}

interface TableSection {
    title: string;
    data: AvfzalKamchilikItem[];
}

export const table: TableSection[] = [
    {
        title: "Avfzal",
        data: avfzalKamchilik.Avfzal,
    },
    {
        title: "Kamchilik",
        data: avfzalKamchilik.Kamchilik,
    },
];

const TableComponent: React.FC = () => {
    return (
        <>
            <table key={"index-uniq"} className="w-full text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead key={"index-uniq"} className="">
                    <tr>
                        <th scope="col" className="px-6 text-xl py-3">
                            Tomonlari
                        </th>
                        <th scope="col" className="px-6 text-xl py-3">
                            Malumot
                        </th>
                    </tr>
                </thead>
                {table.map((item, index) => (
                    <React.Fragment key={index}>
                        <thead key={"index-" + index} className="text-xs text-gray-700 uppercase bg-light-bg dark:bg-secondary-bg dark:text-gray-400">
                            <tr className="w-full">
                                <th
                                    scope="col"
                                    className="px-6 py-4"
                                    style={{
                                        width: "50%",
                                    }}
                                >
                                    {item.title} tomonlari
                                </th>
                                <th
                                    scope="col"
                                    className="px-6 py-4"
                                    style={{
                                        width: "50%",
                                    }}
                                >
                                    Malumot
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <React.Fragment >
                                {item.data.map((data, idx) => (
                                    <tr key={"index-" + index} className="bg-white border-b dark:bg-background dark:border-gray-700">
                                        <td className="px-6 py-4 font-medium text-gray-900 items-center align-middle dark:text-white">{data.title}</td>
                                        <td className="px-6 py-4">{data.description}</td>
                                    </tr>
                                ))}
                            </React.Fragment>
                        </tbody>
                    </React.Fragment>
                ))}

            </table >
            {/* TODO : create table */}
        </>
    );
};

export default TableComponent;
