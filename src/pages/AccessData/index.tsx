import { AnalyticsDataContextProvider } from "../../context/AnalyticsData/indext";
import Header from "../../components/Header";

import * as C from "./Components";
import * as S from "./styles";

const AccessData = () => (
    <AnalyticsDataContextProvider>
        <Header />
        <S.Content>
            <C.TotalAccessOnPages />
            <C.PorcentageOfAccessOnPages />
            <C.TotalAccessPerHour />
            <C.TotalAccessPerMonth />
            <C.WordCloud />
        </S.Content>
    </AnalyticsDataContextProvider>
);

export default AccessData;
