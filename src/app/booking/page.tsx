"use client";

import Button from "@mui/material/Button";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import TextField from "@mui/material/TextField";
import DateReserve from "@/components/DateReserve";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PersonIcon from "@mui/icons-material/Person";
import PhoneIcon from "@mui/icons-material/Phone";
import EventIcon from "@mui/icons-material/Event";
import { useSearchParams } from "next/navigation";
import { useState, Suspense } from "react";

const venues = [
  { value: "The Sunbeam Pavilion", label: "The Sunbeam Pavilion", description: "A sunlit garden hall with elegant atmosphere" },
  { value: "The Bloom Pavilion", label: "The Bloom Pavilion", description: "Elegant garden venue for weddings" },
  { value: "Spark Space", label: "Spark Space", description: "Modern industrial loft for corporate events" },
  { value: "The Grand Table", label: "The Grand Table", description: "Classic ballroom for formal gatherings" },
];

function BookingForm() {
  const searchParams = useSearchParams();
  const venueParam = searchParams?.get("venue") || "";
  const [selectedVenue, setSelectedVenue] = useState(venueParam);
  return (
    <main className="min-h-[calc(100svh-4rem)] bg-[#f8f3ea] px-4 py-10 sm:px-6 lg:px-8 flex justify-center">
      <section className="w-full max-w-3xl flex flex-col gap-10 !my-8">
        <Box className="text-center">
          <Typography 
            variant="overline" 
            sx={{ 
              color: '#b45309', 
              fontWeight: 700, 
              letterSpacing: '0.25em',
              fontSize: '0.75rem'
            }}
          >
            Reservation
          </Typography>
          <Typography 
            variant="h2" 
            component="h1" 
            sx={{ 
              fontWeight: 600, 
              color: '#1c1917',
              mt: 1,
              fontSize: { xs: '2rem', sm: '2.5rem' },
              letterSpacing: '-0.02em'
            }}
          >
            Book Your Venue
          </Typography>
          <Typography 
            variant="body1" 
            sx={{ 
              color: '#57534e', 
              mt: 1.5,
              maxWidth: '500px',
              mx: 'auto'
            }}
          >
            Select your preferred venue and date to reserve your perfect event space
          </Typography>
        </Box>

        <Paper 
          elevation={0}
          sx={{ 
            borderRadius: 3, 
            border: '1px solid #e7e5e4',
            overflow: 'hidden'
          }}
        >
          <Box sx={{ p: { xs: 3, sm: 5 } }}>
            <form>
              <Typography 
                variant="h6" 
                sx={{ 
                  fontWeight: 600, 
                  color: '#1c1917',
                  mb: 3,
                  fontSize: '1.125rem'
                }}
              >
                Contact Information
              </Typography>
              
              <Box sx={{ display: 'grid', gap: 3, mb: 4 }}>
                <TextField
                  name="Name-Lastname"
                  label="Name-Lastname"
                  variant="outlined"
                  fullWidth
                  slotProps={{
                    htmlInput: {
                      className: "MuiInput-input"
                    },
                    input: {
                      startAdornment: <PersonIcon sx={{ color: '#a8a29e', mr: 1 }} />
                    }
                  }}
                  sx={{
                    '& .MuiOutlinedInput-root': {
                      borderRadius: 2,
                      '& fieldset': { borderColor: '#e7e5e4' },
                      '&:hover fieldset': { borderColor: '#d6d3d1' },
                      '&.Mui-focused fieldset': { borderColor: '#1c1917', borderWidth: 2 }
                    },
                    '& .MuiInputLabel-root.Mui-focused': { color: '#1c1917' }
                  }}
                />
                <TextField
                  name="Contact-Number"
                  label="Contact-Number"
                  variant="outlined"
                  fullWidth
                  slotProps={{
                    htmlInput: {
                      className: "MuiInput-input"
                    },
                    input: {
                      startAdornment: <PhoneIcon sx={{ color: '#a8a29e', mr: 1 }} />
                    }
                  }}
                  sx={{
                    '& .MuiOutlinedInput-root': {
                      borderRadius: 2,
                      '& fieldset': { borderColor: '#e7e5e4' },
                      '&:hover fieldset': { borderColor: '#d6d3d1' },
                      '&.Mui-focused fieldset': { borderColor: '#1c1917', borderWidth: 2 }
                    },
                    '& .MuiInputLabel-root.Mui-focused': { color: '#1c1917' }
                  }}
                />
              </Box>

              <Divider sx={{ my: 3, borderColor: '#e7e5e4' }} />

              <Typography 
                variant="h6" 
                sx={{ 
                  fontWeight: 600, 
                  color: '#1c1917',
                  mb: 3,
                  fontSize: '1.125rem'
                }}
              >
                Event Details
              </Typography>

              <Box sx={{ display: 'grid', gap: 3, mb: 4 }}>
                <FormControl fullWidth>
                  <InputLabel 
                    id="venue-label"
                    sx={{
                      '&.Mui-focused': { color: '#1c1917' }
                    }}
                  >
                    Select Venue
                  </InputLabel>
                  <Select
                    labelId="venue-label"
                    id="venue"
                    value={selectedVenue}
                    label="Select Venue"
                    onChange={(e) => setSelectedVenue(e.target.value)}
                    startAdornment={<LocationOnIcon sx={{ color: '#a8a29e', mr: 1, ml: 1 }} />}
                    sx={{
                      borderRadius: 2,
                      '& .MuiOutlinedInput-notchedOutline': { borderColor: '#e7e5e4' },
                      '&:hover .MuiOutlinedInput-notchedOutline': { borderColor: '#d6d3d1' },
                      '&.Mui-focused .MuiOutlinedInput-notchedOutline': { borderColor: '#1c1917', borderWidth: 2 }
                    }}
                  >
                    {venues.map((venue) => (
                      <MenuItem key={venue.value} value={venue.value}>
                        <Box>
                          <Typography variant="body1" sx={{ fontWeight: 500 }}>{venue.label}</Typography>
                          <Typography variant="caption" sx={{ color: '#78716c' }}>{venue.description}</Typography>
                        </Box>
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
                
                <Box sx={{ 
                  p: 3, 
                  borderRadius: 2, 
                  border: '1px solid #e7e5e4',
                  backgroundColor: '#fafaf9'
                }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2 }}>
                    <CalendarMonthIcon sx={{ color: '#b45309', fontSize: 20 }} />
                    <Typography variant="subtitle2" sx={{ fontWeight: 600, color: '#1c1917' }}>
                      Event Date
                    </Typography>
                  </Box>
                  <DateReserve />
                </Box>
              </Box>

              <Divider sx={{ my: 3, borderColor: '#e7e5e4' }} />

              <Button 
                name="Book Venue" 
                variant="contained" 
                type="submit"
                fullWidth
                size="large"
                startIcon={<EventIcon />}
                sx={{
                  mt: 1,
                  py: 1.5,
                  borderRadius: 2,
                  backgroundColor: '#1c1917',
                  color: '#ffffff',
                  fontWeight: 600,
                  fontSize: '1rem',
                  textTransform: 'none',
                  boxShadow: 'none',
                  '&:hover': {
                    backgroundColor: '#292524',
                    boxShadow: 'none'
                  },
                  '&:active': {
                    backgroundColor: '#1c1917'
                  }
                }}
              >
                Book Venue
              </Button>
            </form>
          </Box>

          <Box sx={{ 
            p: 3, 
            backgroundColor: '#f5f5f4',
            borderTop: '1px solid #e7e5e4',
            display: 'flex',
            justifyContent: 'center',
            gap: 3,
            flexWrap: 'wrap'
          }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <Box sx={{ width: 8, height: 8, borderRadius: '50%', backgroundColor: '#22c55e' }} />
              <Typography variant="caption" sx={{ color: '#57534e' }}>Instant Confirmation</Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <Box sx={{ width: 8, height: 8, borderRadius: '50%', backgroundColor: '#22c55e' }} />
              <Typography variant="caption" sx={{ color: '#57534e' }}>Free Cancellation</Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <Box sx={{ width: 8, height: 8, borderRadius: '50%', backgroundColor: '#22c55e' }} />
              <Typography variant="caption" sx={{ color: '#57534e' }}>24/7 Support</Typography>
            </Box>
          </Box>
        </Paper>
      </section>
    </main>
  );
}

function BookingWithSuspense() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <BookingForm />
    </Suspense>
  );
}

export default function BookingPage() {
  return <BookingWithSuspense />;
}
