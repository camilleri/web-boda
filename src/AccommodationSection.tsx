import { Trans, useTranslation } from "react-i18next";
import Spacer from "./style_components/Spacer";
import Text from "./style_components/Text";
import {
  boxWidth,
  boxWidthMobile,
  colorLightGreen,
  innerSectionSpacer,
  middleSectionSpacer,
  outerSectionSpacer,
  textSize,
  textSizeMobile,
  titleSize,
  titleSizeMobile,
  titleWeight,
} from "./style_components/constants";
import HotelIcon from "/icons/hotel.svg";
import Icon from "./style_components/Icon";
import Box from "./style_components/Box";
import Section from "./style_components/Section";
import styled from "styled-components";

const StyledA = styled.a`
  color: black;
  text-decoration: underline ${colorLightGreen};
  font-weight: 500;

  &:hover {
    transform: scale(1.05);
  }
`;

type Props = {
  backgroundColor: string;
  reference: React.RefObject<HTMLDivElement>;
};
function AccommodationSection(props: Props) {
  useTranslation();

  return (
    <Section
      backgroundColor={props.backgroundColor}
      reference={props.reference}
    >
      <Spacer top={outerSectionSpacer} />
      <Icon src={HotelIcon} size="4em" mobileSize="6vh" />
      <Spacer bottom={innerSectionSpacer} />
      <Text
        fontSize={titleSize}
        fontSizeMobile={titleSizeMobile}
        fontWeight={titleWeight}
      >
        <Trans i18nKey={"accommodation_title"} />
      </Text>
      <Spacer top={innerSectionSpacer} />
      <Box width={boxWidth} widthMobile={boxWidthMobile}>
        <Text
          fontSize={textSize}
          fontSizeMobile={textSizeMobile}
          textAlign="center"
        >
          <Trans i18nKey={"accommodation_message"} />
          <Spacer top={innerSectionSpacer} />
          <Trans
            i18nKey={"accommodation_oliva"}
            components={{
              airbnb: (
                <StyledA
                  href="https://www.airbnb.es/s/Oliva--Espa%C3%B1a/homes?tab_id=home_tab&refinement_paths%5B%5D=%2Fhomes&flexible_trip_lengths%5B%5D=one_week&monthly_start_date=2025-01-01&monthly_length=3&monthly_end_date=2025-04-01&price_filter_input_type=0&channel=EXPLORE&query=Oliva%2C%20Espa%C3%B1a&place_id=ChIJVcVFxyHkYQ0RYIoj126vAgQ&location_bb=QhvF%2FrzLG4dCG20CvichhQ%3D%3D&date_picker_type=calendar&checkin=2025-04-11&checkout=2025-04-13&source=structured_search_input_header&search_type=autocomplete_click"
                  target="_blank"
                >
                  Airbnb
                </StyledA>
              ),
              booking: (
                <StyledA
                  href="https://www.booking.com/searchresults.en-gb.html?ss=Oliva%2C+Valencia+Community%2C+Spain&efdco=1&label=en-es-booking-desktop-qYWoV_Fr*prpBspmirVxfgS652828998709%3Apl%3Ata%3Ap1%3Ap2%3Aac%3Aap%3Aneg%3Afi%3Atikwd-65526620%3Alp1005542%3Ali%3Adec%3Adm&aid=2311236&lang=en-gb&sb=1&src_elem=sb&src=index&dest_id=-394413&dest_type=city&ac_position=0&ac_click_type=b&ac_langcode=en&ac_suggestion_list_length=5&search_selected=true&search_pageview_id=7219432996740015&ac_meta=GhA3MjE5NDMyOTk2NzQwMDE1IAAoATICZW46BU9saXZhQABKAFAA&checkin=2025-04-11&checkout=2025-04-13&group_adults=2&no_rooms=1&group_children=0"
                  target="_blank"
                >
                  Booking
                </StyledA>
              ),
              oliva: (
                <StyledA
                  href="https://olivaturismo.com/oliva/web_php/index.php?contenido=subapartados_coconut&id_boto=4077&title=dnde-dormir"
                  target="_blank"
                >
                  <Trans i18nKey={"web_oliva_turisme"} />
                </StyledA>
              ),
            }}
          />
        </Text>
      </Box>
      <Spacer top={middleSectionSpacer} />
    </Section>
  );
}

export default AccommodationSection;
