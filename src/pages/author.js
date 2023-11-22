// Step 1: Import React
import * as React from 'react'
import Layout from '../components/layout'
import { SEO } from '../components/seo'

// Step 2: Define your component
const AuthorPage = () => {
    return (
        <Layout pageTitle="Author">
            <table>
                <tr>
                    <th>NIM</th>
                    <th>Nama</th>
                </tr>
                <tr>
                    <td>201080200188</td>
                    <td>Ahmad Irfan Masaid</td>
                </tr>
                <tr>
                    <td>201080200208</td>
                    <td>Daffa Maha Putra M</td>
                </tr>
                <tr>
                    <td>201080200105</td>
                    <td>M. Alfian Nur Hidayat</td>
                </tr>
                <tr>
                    <td>201080200120</td>
                    <td>Zainul Anwar</td>
                </tr>
                <tr>
                    <td>201080200135</td>
                    <td>Leo Sebastian Adi P.</td>
                </tr>
                <tr>
                    <td>201080200125</td>
                    <td>Ardi Setiawan</td>
                </tr>
                <tr>
                    <td>201080200132</td>
                    <td>Agung Nur Dwianto</td>
                </tr>
                <tr>
                    <td>201080200133</td>
                    <td>Dimas Maulana P.</td>
                </tr>
            </table>
        </Layout>
    )
}

export const Head = () => (
    <>
        <SEO title="Author" />
        <meta name="description" content="Your description" />

    </>
)

// Step 3: Export your component
export default AuthorPage