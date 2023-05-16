import {
    ChartComponent,
    SeriesCollectionDirective,
    SeriesDirective,
    Inject,
    Legend,
    Category,
    Tooltip,
    DataLabel,
    ColumnSeries,
} from "@syncfusion/ej2-react-charts";
import { useStateContext } from "../../context/ContextProvider";
import { Header } from "../../components";

import {
    barCustomSeries,
    barPrimaryYAxis,
    barPrimaryXAxis,
} from "../../data/dummy";

const Bar = () => {
    const { currentMode } = useStateContext();

    return (
        <div className="m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl">
            <Header title="Olympic Medal Counts - RIO" category="Bar" />
            <ChartComponent
                id="bar-chart"
                height="420px"
                primaryXAxis={barPrimaryXAxis}
                primaryYAxis={barPrimaryYAxis}
                chartArea={{ border: { width: 0 } }}
                tooltip={{ enable: true }}
                background={currentMode === "Dark" ? "#333733e" : "#fff"}
            >
                <Inject
                    services={[
                        ColumnSeries,
                        Legend,
                        Tooltip,
                        DataLabel,
                        Category,
                    ]}
                />
                <SeriesCollectionDirective>
                    {barCustomSeries.map((item, index) => (
                        <SeriesDirective key={index} {...item} />
                    ))}
                </SeriesCollectionDirective>
            </ChartComponent>
        </div>
    );
};

export default Bar;
