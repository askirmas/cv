import type cv_example from "../cv-langs.json"
import { NextPage } from "next"
import CV from "../components/CV"

type CVData = typeof cv_example["en"]

const Page: NextPage<CVData> = (props) => <CV {...props}/>

Page.getInitialProps = ({query}) => query as unknown as CVData

export default Page
