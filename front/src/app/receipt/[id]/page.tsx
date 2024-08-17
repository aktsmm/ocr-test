import AnalysisResultDetail from "../../_components/AnalysisResultDetail";

type Props = {
  params: { id: string };
};


export default function Page({ params }: Props)
{
  return (
    <div>
      <h1>Receipt</h1>
      <p>id: {params.id}</p>
      <AnalysisResultDetail params={params} />
    </div>
  );
}
