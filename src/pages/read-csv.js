import React, { useState } from 'react';
import Layout from '../components/layout';

const ReadCSV = () => {
    const [csvData, setCSVData] = useState([]);

    const handleFileUpload = (event) => {
        const file = event.target.files[0];
        const reader = new FileReader();

        reader.onload = (e) => {
            const contents = e.target.result;
            const lines = contents.split('\n');
            const data = lines.map((line) => line.split(','));

            setCSVData(data);
        };

        reader.readAsText(file);
    };

    return (
        <Layout pageTitle="Read CSV">
            <div>
                <input type="file" onChange={handleFileUpload} />
                <table>
                    <thead>
                        <tr>
                            {csvData.length > 0 &&
                                csvData[0].map((cell, cellIndex) => (
                                    <th key={cellIndex}>{cell}</th>
                                ))}
                        </tr>
                    </thead>
                    <tbody>
                        {csvData.slice(1).map((row, index) => (
                            <tr key={index}>
                                {row.map((cell, cellIndex) => (
                                    <td key={cellIndex}>{cell}</td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </Layout>
    );
};

export default ReadCSV;
