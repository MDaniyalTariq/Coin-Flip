import { useEffect, useState } from "react";
import { fetchTotalSolDistributed, fetchTotalWishes } from '../api';
const HeaderMain = () => {
  const [totalWishes, setTotalWishes] = useState<number | null>(null);
  const [totalSolDistributed, setTotalSolDistributed] = useState<number | null>(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const wishesData = await fetchTotalWishes();
        const solData = await fetchTotalSolDistributed();

        setTotalWishes(wishesData.totalWishes);
        setTotalSolDistributed(solData.totalSolDistributed);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    getData();
  }, []);
  return (
    <div className="header-main MuiBox-root css-0" id="header-main">
      <div className="container MuiBox-root css-0">
        <div className="header-row MuiBox-root css-0">
          <div className="header-cust-col MuiBox-root css-0">
            <div className="icon-wrapper MuiBox-root css-0">
              <div className="icon-flex MuiBox-root css-0">
                <img
                  src="data:image/svg+xml,%3csvg%20width='56'%20height='39'%20viewBox='0%200%2056%2039'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M38.446%2019.3795C43.232%2019.3795%2047.132%2015.1165%2047.132%209.9295C47.132%204.8015%2043.252%200.739502%2038.446%200.739502C33.68%200.739502%2029.759%204.8615%2029.759%209.9695C29.779%2015.1365%2033.68%2019.3795%2038.446%2019.3795ZM15.282%2019.8215C19.424%2019.8215%2022.822%2016.1015%2022.822%2011.5375C22.822%207.0735%2019.464%203.4745%2015.282%203.4745C11.14%203.4745%207.722%207.1345%207.742%2011.5775C7.762%2016.1225%2011.14%2019.8215%2015.282%2019.8215ZM38.446%2016.3435C35.51%2016.3435%2032.996%2013.5285%2032.996%209.9695C32.996%206.4695%2035.47%203.7765%2038.446%203.7765C41.442%203.7765%2043.895%206.4305%2043.895%209.9285C43.895%2013.4885%2041.422%2016.3435%2038.446%2016.3435ZM15.282%2016.8255C12.829%2016.8255%2010.738%2014.4735%2010.738%2011.5775C10.738%208.7425%2012.808%206.4705%2015.282%206.4705C17.815%206.4705%2019.846%208.7025%2019.846%2011.5375C19.846%2014.4735%2017.755%2016.8255%2015.282%2016.8255ZM4.102%2038.2605H19.887C18.921%2037.7175%2018.177%2036.5105%2018.318%2035.2845H3.6C3.198%2035.2845%202.997%2035.1245%202.997%2034.7415C2.997%2029.7555%208.687%2025.0905%2015.263%2025.0905C17.796%2025.0905%2020.068%2025.6935%2022.019%2026.8395C22.6658%2026.0198%2023.4316%2025.3015%2024.291%2024.7085C21.697%2022.9985%2018.581%2022.1145%2015.263%2022.1145C6.837%2022.1145%200%2028.2265%200%2034.9225C0%2037.1545%201.367%2038.2605%204.102%2038.2605ZM25.818%2038.2605H51.074C54.411%2038.2605%2056%2037.2555%2056%2035.0435C56%2029.7755%2049.344%2022.1535%2038.446%2022.1535C27.527%2022.1535%2020.872%2029.7755%2020.872%2035.0435C20.872%2037.2555%2022.46%2038.2605%2025.818%2038.2605ZM24.853%2035.2245C24.33%2035.2245%2024.109%2035.0845%2024.109%2034.6615C24.109%2031.3635%2029.216%2025.1915%2038.446%2025.1915C47.656%2025.1915%2052.762%2031.3635%2052.762%2034.6615C52.762%2035.0835%2052.562%2035.2245%2052.038%2035.2245H24.853Z'%20fill='white'/%3e%3c/svg%3e"
                  alt="User"
                  className="icons"
                />
                <p className="MuiTypography-root MuiTypography-body1 icon-text css-1woqsuu">{totalWishes} Total Wish</p>
              </div>
              <div className="icon-flex MuiBox-root css-0">
                <img
                  src="/assets/white-coin-BGctmpWs.svg"
                  alt="Total Sol Distributed"
                  className="icons"
                />
                <p className="MuiTypography-root MuiTypography-body1 icon-text css-1woqsuu">{totalSolDistributed} Total Sol Distributed</p>
              </div>
            </div>
          </div>

          <div className="header-cust-col MuiBox-root css-0">
            <div className="border-btn-main header-btn-main MuiBox-root css-0">
              <button className="MuiButtonBase-root MuiButton-root MuiButton-text MuiButton-textPrimary MuiButton-sizeMedium MuiButton-textSizeMedium MuiButton-colorPrimary MuiButton-root MuiButton-text MuiButton-textPrimary MuiButton-sizeMedium MuiButton-textSizeMedium MuiButton-colorPrimary border-btn css-f4tzra" type="button">
                <div className="wallet-adapter-dropdown">
                  <button className="wallet-adapter-button wallet-adapter-button-trigger" type="button">
                    Select Wallet
                  </button>
                  <ul
                    aria-label="dropdown-list"
                    className="wallet-adapter-dropdown-list false"
                    role="menu"
                  >
                    <li className="wallet-adapter-dropdown-list-item" role="menuitem">
                      Change wallet
                    </li>
                  </ul>
                </div>
                <span className="MuiTouchRipple-root css-w0pj6f"></span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderMain;
