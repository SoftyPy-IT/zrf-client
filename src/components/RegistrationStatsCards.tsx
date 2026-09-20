"use client";

import { getPublicApiUrl } from "@/config/env";
import { divisions } from "@/lib/constant";
import { useLanguage } from "@/provider/LanguageProvider";
import {
  Box,
  Card,
  CardContent,
  CircularProgress,
  Grid,
  Typography,
} from "@mui/material";
import axios from "axios";
import { useCallback, useEffect, useState } from "react";

type DivisionStat = {
  division: string;
  count: number;
};

type RegistrationStats = {
  total: number;
  byDivision: DivisionStat[];
};

const DIVISION_LABELS_BN: Record<string, string> = {
  Barisal: "বরিশাল",
  Chattogram: "চট্টগ্রাম",
  Dhaka: "ঢাকা",
  Khulna: "খুলনা",
  Mymensingh: "ময়মনসিংহ",
  Rajshahi: "রাজশাহী",
  Rangpur: "রংপুর",
  Sylhet: "সিলেট",
};

type RegistrationStatsCardsProps = {
  refreshKey?: number;
};

export default function RegistrationStatsCards({
  refreshKey = 0,
}: RegistrationStatsCardsProps) {
  const { language } = useLanguage();
  const [stats, setStats] = useState<RegistrationStats | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const fetchStats = useCallback(async () => {
    const API_URL = getPublicApiUrl();
    if (!API_URL) {
      setError(true);
      setLoading(false);
      return;
    }

    try {
      setLoading(true);
      setError(false);
      const response = await axios.get(`${API_URL}/registrations/stats`, {
        timeout: 15000,
      });
      const data = response?.data?.data;
      if (data) {
        setStats({
          total: Number(data.total) || 0,
          byDivision: Array.isArray(data.byDivision) ? data.byDivision : [],
        });
      } else {
        setError(true);
      }
    } catch {
      setError(true);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchStats();
  }, [fetchStats, refreshKey]);

  const getDivisionCount = (division: string) => {
    const found = stats?.byDivision?.find((item) => item.division === division);
    return found?.count ?? 0;
  };

  const getDivisionLabel = (division: string) =>
    language === "BNG" ? DIVISION_LABELS_BN[division] || division : division;

  const cardBaseSx = {
    height: "100%",
    borderRadius: { xs: 2, md: 3 },
    border: "1px solid rgba(46,139,87,0.28)",
    background:
      "linear-gradient(165deg, rgba(19,38,32,0.97) 0%, rgba(13,42,42,0.98) 100%)",
    boxShadow: "0 12px 32px rgba(0,0,0,0.22)",
    transition: "transform 0.2s ease, border-color 0.2s ease",
    "@media (hover: hover)": {
      "&:hover": {
        transform: "translateY(-2px)",
        borderColor: "rgba(46,139,87,0.5)",
      },
    },
  };

  return (
    <Box
      sx={{
        mt: { xs: 4, md: 6 },
        mb: { xs: 1, md: 2 },
        pt: { xs: 2.5, md: 4 },
        borderTop: "1px solid rgba(46,139,87,0.22)",
      }}
    >
      <Box sx={{ textAlign: "center", mb: { xs: 2.5, md: 3.5 }, px: 0.5 }}>
        <Typography
          variant="overline"
          sx={{
            display: "block",
            letterSpacing: { xs: 1.2, md: 1.6 },
            color: "#FEC909",
            fontWeight: 700,
            mb: 0.75,
            fontSize: { xs: "0.65rem", sm: "0.75rem" },
          }}
        >
          {language === "BNG" ? "লাইভ আপডেট" : "Live Update"}
        </Typography>
        <Typography
          variant="h5"
          sx={{
            fontWeight: 800,
            color: "#F4FAF6",
            mb: 0.75,
            fontSize: { xs: "1.15rem", sm: "1.35rem", md: "1.5rem" },
          }}
        >
          {language === "BNG"
            ? "রেজিস্ট্রেশন পরিসংখ্যান"
            : "Registration Statistics"}
        </Typography>
        <Typography
          variant="body2"
          sx={{
            color: "rgba(200,224,208,0.65)",
            maxWidth: 420,
            mx: "auto",
            fontSize: { xs: "0.8rem", md: "0.875rem" },
          }}
        >
          {language === "BNG"
            ? "মোট জমা ও বিভাগভিত্তিক সংখ্যা"
            : "Total submissions and counts by division"}
        </Typography>
      </Box>

      {loading ? (
        <Box sx={{ display: "flex", justifyContent: "center", py: 4 }}>
          <CircularProgress sx={{ color: "#2E8B57" }} />
        </Box>
      ) : error ? (
        <Typography
          variant="body2"
          sx={{ textAlign: "center", color: "rgba(200,224,208,0.55)", py: 2 }}
        >
          {language === "BNG"
            ? "পরিসংখ্যান লোড করা যায়নি।"
            : "Unable to load registration statistics."}
        </Typography>
      ) : (
        <Grid container spacing={{ xs: 1.5, sm: 2 }}>
          <Grid item xs={12} sm={6} md={4}>
            <Card
              sx={{
                ...cardBaseSx,
                border: "1px solid rgba(254,201,9,0.4)",
                background:
                  "linear-gradient(145deg, #1a4a3a 0%, #0d2a2a 55%, #132620 100%)",
              }}
            >
              <CardContent
                sx={{
                  textAlign: "center",
                  py: { xs: 2.25, md: 3 },
                  px: { xs: 1.5, md: 2 },
                  "&:last-child": { pb: { xs: 2.25, md: 3 } },
                }}
              >
                <Typography
                  variant="overline"
                  sx={{
                    color: "#FEC909",
                    letterSpacing: 1.2,
                    fontWeight: 700,
                    fontSize: { xs: "0.65rem", md: "0.75rem" },
                  }}
                >
                  {language === "BNG" ? "মোট জমা" : "Total Submissions"}
                </Typography>
                <Typography
                  variant="h3"
                  sx={{
                    mt: 1,
                    fontWeight: 800,
                    color: "#ffffff",
                    lineHeight: 1.1,
                    fontSize: { xs: "1.75rem", sm: "2rem", md: "2.5rem" },
                  }}
                >
                  {(stats?.total ?? 0).toLocaleString()}
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          {divisions.map((division) => (
            <Grid item xs={6} sm={6} md={4} key={division}>
              <Card sx={cardBaseSx}>
                <CardContent
                  sx={{
                    textAlign: "center",
                    py: { xs: 1.75, md: 2.5 },
                    px: { xs: 1, sm: 1.5, md: 2 },
                    "&:last-child": { pb: { xs: 1.75, md: 2.5 } },
                  }}
                >
                  <Typography
                    variant="subtitle1"
                    sx={{
                      color: "#C8E0D0",
                      fontWeight: 700,
                      mb: 0.5,
                      fontSize: { xs: "0.8rem", sm: "0.95rem", md: "1rem" },
                      lineHeight: 1.25,
                      wordBreak: "break-word",
                    }}
                  >
                    {getDivisionLabel(division)}
                  </Typography>
                  <Typography
                    variant="h4"
                    sx={{
                      fontWeight: 800,
                      color: "#FEC909",
                      lineHeight: 1.15,
                      fontSize: { xs: "1.35rem", sm: "1.6rem", md: "1.85rem" },
                    }}
                  >
                    {getDivisionCount(division).toLocaleString()}
                  </Typography>
                  <Typography
                    variant="caption"
                    sx={{
                      color: "rgba(200,224,208,0.65)",
                      fontSize: { xs: "0.65rem", md: "0.75rem" },
                    }}
                  >
                    {language === "BNG" ? "জমা" : "submissions"}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      )}
    </Box>
  );
}
