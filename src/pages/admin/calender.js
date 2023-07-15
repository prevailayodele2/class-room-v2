import { Box as Boxx } from '@chakra-ui/react';
import AdminLayout from 'layouts/admin';
import { useState } from "react";
import { useColorModeValue } from '@chakra-ui/react';
import FullCalendar, { formatDate } from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import listPlugin from "@fullcalendar/list";
import {
  Box,
  List,
  ListItem,
  ListItemText,
  Typography,
  useTheme,
} from "@mui/material";


export default function Calender() {
    const [currentEvents, setCurrentEvents] = useState([]);

    const boxBg = useColorModeValue("#E0E5F2", "#0b1437");
    const textColor = useColorModeValue("#0b1437", 'white');
    const handleDateClick = (selected) => {
      const title = prompt("Please enter a new title for your event");
      const calendarApi = selected.view.calendar;
      calendarApi.unselect();
  
      if (title) {
        calendarApi.addEvent({
          id: `${selected.dateStr}-${title}`,
          title,
          start: selected.startStr,
          end: selected.endStr,
          allDay: selected.allDay,
        });
      }
    };
    const handleEventClick = (selected) => {
        if (
          window.confirm(
            `Are you sure you want to delete the event '${selected.event.title}'`
          )
        ) {
          selected.event.remove();
        }
      };
    return (
        <>
          <AdminLayout>
            <Boxx pt={{ base: '130px', md: '80px', xl: '80px' }}>
            <Box m="20px">
                <Box display="flex" justifyContent="space-between">
                    {/* CALENDAR SIDEBAR */}
                    <Box
                    flex="1 1 20%"
                    backgroundColor={boxBg}
                    p="15px"
                    borderRadius="4px"
                    >
                    <p style={{color:textColor, fontSize: '18px', fontWeight: '600'}}>Events</p>
                    <List>
                        {/* {currentEvents.length > 0 ? currentEvents?.map((event) => (
                        <ListItem
                            key={event?.id}
                            sx={{
                            backgroundColor: "#4cceac",
                            margin: "10px 0",
                            borderRadius: "2px",
                            }}
                        >
                            <ListItemText
                            primary={event.title}
                            secondary={
                                <p>
                                {formatDate(event.start, {
                                    year: "numeric",
                                    month: "short",
                                    day: "numeric",
                                })}
                                </p>
                            }
                            />
                        </ListItem>
                        )) : ' '} */}
                    </List>
                    </Box>

                    {/* CALENDAR */}
                    <Box flex="1 1 100%" ml="15px">
                    <FullCalendar
                        height="75vh"
                        plugins={[
                        dayGridPlugin,
                        timeGridPlugin,
                        interactionPlugin,
                        listPlugin,
                        ]}
                        headerToolbar={{
                        left: "prev,next today",
                        center: "title",
                        right: "dayGridMonth,timeGridWeek,timeGridDay,listMonth",
                        }}
                        initialView="dayGridMonth"
                        editable={true}
                        selectable={true}
                        selectMirror={true}
                        dayMaxEvents={true}
                        select={handleDateClick}
                        eventClick={handleEventClick}
                        eventsSet={(events) => setCurrentEvents(events)}
                        initialEvents={[
                        {
                            id: "12315",
                            title: "All-day event",
                            date: "2022-09-14",
                        },
                        {
                            id: "5123",
                            title: "Timed event",
                            date: "2022-09-28",
                        },
                        ]}
                    />
                    </Box>
                </Box>
                </Box>
            </Boxx> 
         </AdminLayout>  
        </>
    );
}
