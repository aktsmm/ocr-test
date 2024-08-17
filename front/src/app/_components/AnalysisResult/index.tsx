import AnalysisResultTable from "../AnalysisResultTable";

const AnalysisResult = async () =>
{
  return (
    <section className='text-gray-600 body-font'>
      <div className='container px-5 py-24 mx-auto'>
        <AnalysisResultTable />
      </div>
    </section>
  );
}

export default AnalysisResult;
