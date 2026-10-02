
/*
 * Normally, every train has to have a SignalInFront, so it can't be null
 * But SimRail API only provides us with SignalInFront if the Signal is less than 5 km away
 * If the signal is more than 5 km away, the SignalInFront entry is `null`
 * So we have to guess which is the next signal. It can be wrong, but better than nothing
*/

export interface NextSignalGroup {
	lastSignals: string[]
	nextSignal: string
}

export const NextSignalGroups: NextSignalGroup[] = [
	//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~\\
	//~ S1 | KATOWICE - Wloszczowa Polnoc ~\\
	//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~\\
	//
	// Katowice -> Katowice Towarowa KTC [Map-Border]
	{ lastSignals: ['l137_ktc_u1', 'l127_ktc_u2'], nextSignal: 'l137_ktc_o' },

	//
	// Katowice -> Brynow [Map-Border]
	{ lastSignals: ['l139_bry_a', 'l139_bry_b', 'l139_bry_c'], nextSignal: 'l139_bry_o' },

	//
	// Lazy Lc -> Przemiarki
	{ lastSignals: ['LC_S7', 'LC_S3', 'LC_S1', 'LC_S2', 'LC_S4', 'LC_S6'], nextSignal: 'Pmi_B' },

	//
	// Przemiarki -> Dabrowa Gornicza Towarowa
	{ lastSignals: ['Pmi_B', 'Pmi_A'], nextSignal: 'DTA_B' },

	//
	// Przemiarki -> Lazy Lc
	{ lastSignals: ['Pmi_D', 'Pmi_C'], nextSignal: 'LC_Z' },

	//
	// Myszkow Map-Exit
	{ lastSignals: ['My_D', 'My_C'], nextSignal: 'My_Z' },

	//
	// Koniecpol <-> Starzyny
	{ lastSignals: ['1830_Ko_J'], nextSignal: 'Str_D' },
	{ lastSignals: ['Str_B', 'Str_A'], nextSignal: '1830_Ko_A' },
	//
	//Starzyny - Sprowa - Kozlow
	{ lastSignals: ['Str_C', 'Str_D'], nextSignal: 'Sp_D' },
	{ lastSignals: ['Sp_B', 'Sp_A'], nextSignal: 'Str_B' },

	{ lastSignals: ['Sp_C', 'Sp_D'], nextSignal: 'Kz_C' },
	{ lastSignals: ['Kz_F7', 'Kz_F5', 'Kz_F3', 'Kz_F1', 'Kz_G2', 'Kz_G4', 'Kz_G6'], nextSignal: 'Sp_B' },



	//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~\\
	//~ S3 | LODZ VOIVODESHIP - GALKOWEK / ZGIERZ -> KUTNO / LOWICZ GLOWNY ~\\
	//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~\\
	//
	// LK14 Sedzice <-> Retkinia
	{ lastSignals: ['3792_Se_B', '3792_Se_C'], nextSignal: '3827_Si_K' },
	{ lastSignals: ['3827_Si_L', '3827_Si_B', '3827_Si_C', '3827_Si_D', '3827_Si_E'], nextSignal: '2582_Me_D' },
	{ lastSignals: ['2582_Me_C'], nextSignal: '5291_ZW_P' },
	{ lastSignals: ['2582_Me_D'], nextSignal: '5291_ZW_R' },
	{ lastSignals: ['919_Ga_C', '919_Ga_D', '919_Ga_E', '919_Ga_F'], nextSignal: '292_Bo_D' },
	{ lastSignals: ['292_Bo_C'], nextSignal: '2360_La_P' },
	{ lastSignals: ['292_Bo_D'], nextSignal: '2360_La_R' },
	{ lastSignals: ['2360_La_C', '2360_La_D', '2360_La_E', '2360_La_F', '2360_La_G'], nextSignal: '802_Db_J' },
	{ lastSignals: ['802_Db_H'], nextSignal: '802_Db_C' },
	{ lastSignals: ['802_Db_J'], nextSignal: '802_Db_D' },
	{ lastSignals: ['802_Db_C'], nextSignal: '3093_Pa_P' },
	{ lastSignals: ['802_Db_D'], nextSignal: '3093_Pa_R' },
	{ lastSignals: ['3093_Pa_C', '3093_Pa_D', '3093_Pa_E', '3093_Pa_F'], nextSignal: '2330_Lb_R' },
	{ lastSignals: ['2330_Lb_C', '2330_Lb_D', '2330_Lb_E', '2330_Lb_F', '2330_Lb_G'], nextSignal: '3577_Rt_F' },
	//
	{ lastSignals: ['3577_Rt_D', '3577_Rt_C', '3577_Rt_B', '3577_Rt_A'], nextSignal: '2330_Lb_B' },
	{ lastSignals: ['2330_Lb_O', '2330_Lb_N', '2330_Lb_M', '2330_Lb_L', '2330_Lb_K'], nextSignal: '3093_Pa_B' },
	{ lastSignals: ['3093_Pa_N', '3093_Pa_M', '3093_Pa_L', '3093_Pa_K'], nextSignal: '802_Db_B' },
	{ lastSignals: ['802_Db_B'], nextSignal: '802_Db_F' },
	{ lastSignals: ['802_Db_A'], nextSignal: '802_Db_E' },
	{ lastSignals: ['802_Db_F'], nextSignal: '2360_La_B' },
	{ lastSignals: ['802_Db_E'], nextSignal: '2360_La_A' },
	{ lastSignals: ['2360_La_N', '2360_La_M', '2360_La_L', '2360_La_K', '2360_La_J'], nextSignal: '292_Bo_B' },
	{ lastSignals: ['292_Bo_B'], nextSignal: '919_Ga_B' },
	{ lastSignals: ['292_Bo_A'], nextSignal: '919_Ga_A' },
	{ lastSignals: ['5291_ZW_L7', '5291_ZW_L5', '5291_ZW_L3', '5291_ZW_L1', '5291_ZW_K2', '5291_ZW_K4'], nextSignal: '2582_Me_B' },
	{ lastSignals: ['2582_Me_B'], nextSignal: '3827_Si_A' },
	{ lastSignals: ['2582_Me_A'], nextSignal: '3827_Si_A2' },
	{ lastSignals: ['3827_Si_N', '3827_Si_J', '3827_Si_G', '3827_Si_F'], nextSignal: '3792_Se_A' },

	//
	// Lodz Olechow <-> Galkowek
	{ lastSignals: ['2439_LOC_W31', '2439_LOC_W32'], nextSignal: '924_G_D' },
	{ lastSignals: ['924_G_J', '924_G_H', '924_G_G', '924_G_F', '924_G_E'], nextSignal: '2439_LOC_Z2' },

	//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~\\
	//~ LK 15 - Zgierz - Lowicz Glowny ~\\
	//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~\\
	//
	// Zgierz Polnoc <-> Zgierz Kontrewers
	{ lastSignals: ['5314_ZP_K', '5314_ZP_L'], nextSignal: '5313_ZK_A' },
	{ lastSignals: ['5313_ZK_E', '5313_ZK_D'], nextSignal: '5314_ZP_P' },
	//
	// Zgierz Kontrewers <-> Chociszew
	{ lastSignals: ['5313_ZK_K', '5313_ZK_L'], nextSignal: '447_Ch_A' },
	{ lastSignals: ['447_Ch_C2', '447_Ch_C1', '447_Ch_C3'], nextSignal: '5313_ZK_P' },
	//
	// Chociszew <-> Ozorkow
	{ lastSignals: ['447_Ch_D2', '447_Ch_D1', '447_Ch_D3'], nextSignal: '3089_Oz_A' },
	{ lastSignals: ['3089_Oz_F', '3089_Oz_E', '3089_Oz_D'], nextSignal: '447_Ch_F' },
	//
	// Ozorkow <-> Leczyca
	{ lastSignals: ['3089_Oz_M', '3089_Oz_N', '3089_Oz_P'], nextSignal: '2385_Le_A' },
	{ lastSignals: ['2385_Le_G', '2385_Le_F', '2385_Le_E', '2385_Le_D'], nextSignal: '3089_Oz_U' },
	//
	// Leczyca <-> Witonia
	{ lastSignals: ['2385_Le_K', '2385_Le_L', '2385_Le_M', '2385_Le_N'], nextSignal: '4971_Wi_A' },
	{ lastSignals: ['4971_Wi_D', '4971_Wi_C', '4971_Wi_B'], nextSignal: '2385_Le_P' },
	//
	// Witonia <-> Kutno
	{ lastSignals: ['4971_Wi_E', '4971_Wi_F', '4971_Wi_G'], nextSignal: '2133_Ku_A' },
	{ lastSignals: ['2133_Ku_F10', '2133_Ku_F8', '2133_Ku_F6', '2133_Ku_F4', '2133_Ku_F2', '2133_Ku_F1', '2133_Ku_F3', '2133_Ku_F5'], nextSignal: '4971_Wi_H' },


	//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~\\
	//~ LK 16 - Zgierz - Lowicz Glowny ~\\
	//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~\\
	// Zgierz <-> Glinnik
	{ lastSignals: ['5311_Zg_H', '5311_Zg_G', '5311_Zg_F', '5311_Zg_E', '5311_Zg_D', '5311_Zg_C'], nextSignal: '1057_Gl_F' },
	{ lastSignals: ['1057_Gl_E', '1057_Gl_D'], nextSignal: '5311_Zg_B' },
	//
	// Glinnik <-> Strykow
	{ lastSignals: ['1057_Gl_C', '1057_Gl_B'], nextSignal: '4143_St_P' },
	{ lastSignals: ['4143_St_K', '4143_St_L', '4143_St_M'], nextSignal: '1057_Gl_A' },
	//
	// Strykow <-> Glowno
	{ lastSignals: ['4143_St_B', '4143_St_C', '4143_St_D'], nextSignal: '1092_Gn_K' },
	{ lastSignals: ['1092_Gn_J', '1092_Gn_H', '1092_Gn_G', '1092_Gn_F'], nextSignal: '4143_St_A' },
	//
	// Glowno <-> Domaniewice
	{ lastSignals: ['1092_Gn_B', '1092_Gn_C', '1092_Gn_D', '1092_Gn_E'], nextSignal: '824_Dm_P' },
	{ lastSignals: ['824_Dm_L', '824_Dm_K'], nextSignal: '1092_Gn_A' },
	//
	// Domaniewice <-> Lowicz Przedmiescie
	{ lastSignals: ['824_Dm_C', '824_Dm_D'], nextSignal: '2418_LP_M' },
	{ lastSignals: ['2418_LP_L', '2418_LP_K', '2418_LP_J', '2418_LP_H4', '2418_LP_H6'], nextSignal: '824_Dm_A' },
	//
	// Lowicz Glowny <-> Belchow
	{ lastSignals: ['2412_LG_B2', '2412_LG_B1', '2412_LG_C'], nextSignal: '113_Be_P' },
	{ lastSignals: ['113_Be_J', '113_Be_K', '113_Be_L', '113_Be_M', '113_Be_N'], nextSignal: '2412_LG_A1' },


	//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~\\
	//~ S4 | ROZPRZA <-> GRODZISK MAZOWIECKI ~\\
	//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~\\
	//
	// Galkowek <-> Zakowice Poludniowe
	{ lastSignals: ['924_G_K'], nextSignal: '5377_ZP_A' },
	{ lastSignals: ['924_G_L', '924_G_M', '924_G_N', '924_G_O'], nextSignal: '5377_ZP_B' },

	//
	// Zakowice Poludniowe <-> Mikolajow
	{ lastSignals: ['5377_ZP_A', '5377_ZP_B'], nextSignal: '2628_Mi_D' },

	//
	// Lodz Widzew <-> Lodz Marysin <-> Zgierz
	{ lastSignals: ['2457_LW_N104', '2457_LW_N102', '2457_LW_M8', '2457_LW_M6', '2457_LW_M4', '2457_LW_M2'], nextSignal: '2437_LM_A' },
	{ lastSignals: ['2437_LM_D', '2437_LM_C'], nextSignal: '2457_LW_A' },
	{ lastSignals: ['2437_LM_E', '2437_LM_F'], nextSignal: '5311_Zg_R' },
	{ lastSignals: ['5311_Zg_K', '5311_Zg_L', '5311_Zg_M', '5311_Zg_N', '5311_Zg_O', '5311_Zg_P'], nextSignal: '2437_LM_H' },
	
	//
	// Skierniewice <-> Puszcza Marianska
	{ lastSignals: ['3877_Sk_E4', '3877_Sk_E301'], nextSignal: '3459_PM_B' },
	{ lastSignals: ['3459_PM_F', '3459_PM_E', '3459_PM_D', '3459_PM_C'], nextSignal: '3877_Sk_D' },

]

export const NextPredictiveSignal: Record<string, string> = Object.fromEntries(
	NextSignalGroups.flatMap(({ lastSignals, nextSignal }) => {
		return lastSignals.map((lastSignal) => [lastSignal, nextSignal])
	})
)

export function getNextSignalPredictive(lastSignal: string | null | undefined): string | null {
	if (!lastSignal) return null

	return NextPredictiveSignal[lastSignal] ?? null
}