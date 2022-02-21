<?php

use Illuminate\Database\Seeder;

class CountrySeeder extends Seeder
{
    public function run()
    {
        $data = [

            ['code' => 'ZA', 'description' => 'South Africa', 'currency_code' => 'ZAR', 'currency_name' => 'Rand', 'created_at' => date('Y-m-d H:i:s')],
            ['code' => 'AF', 'description' => 'Afghanistan', 'currency_code' => 'AFN', 'currency_name' => 'Afghani', 'created_at' => date('Y-m-d H:i:s')],
            ['code' => 'AX', 'description' => 'Aland Islands', 'currency_code' => 'EUR', 'currency_name' => 'Euro', 'created_at' => date('Y-m-d H:i:s')],
            ['code' => 'AL', 'description' => 'Albania', 'currency_code' => 'ALL', 'currency_name' => 'Lek', 'created_at' => date('Y-m-d H:i:s')],
            ['code' => 'DZ', 'description' => 'Algeria', 'currency_code' => 'DZD', 'currency_name' => 'Dinar', 'created_at' => date('Y-m-d H:i:s')],
            ['code' => 'AS', 'description' => 'American Samoa', 'currency_code' => 'USD', 'currency_name' => 'Dollar', 'created_at' => date('Y-m-d H:i:s')],
            ['code' => 'AD', 'description' => 'Andorra', 'currency_code' => 'EUR', 'currency_name' => 'Euro', 'created_at' => date('Y-m-d H:i:s')],
            ['code' => 'AO', 'description' => 'Angola', 'currency_code' => 'AOA', 'currency_name' => 'Kwanza', 'created_at' => date('Y-m-d H:i:s')],
            ['code' => 'AI', 'description' => 'Anguilla', 'currency_code' => 'XCD', 'currency_name' => 'Dollar', 'created_at' => date('Y-m-d H:i:s')],
            ['code' => 'AG', 'description' => 'Antigua and Barbuda', 'currency_code' => 'XCD', 'currency_name' => 'Dollar', 'created_at' => date('Y-m-d H:i:s')],
            ['code' => 'AR', 'description' => 'Argentina', 'currency_code' => 'ARS', 'currency_name' => 'Peso', 'created_at' => date('Y-m-d H:i:s')],
            ['code' => 'AM', 'description' => 'Armenia', 'currency_code' => 'AMD', 'currency_name' => 'Dram', 'created_at' => date('Y-m-d H:i:s')],
            ['code' => 'AW', 'description' => 'Aruba', 'currency_code' => 'AWG', 'currency_name' => 'Guilder', 'created_at' => date('Y-m-d H:i:s')],
            ['code' => 'AU', 'description' => 'Australia', 'currency_code' => 'AUD', 'currency_name' => 'Dollar', 'created_at' => date('Y-m-d H:i:s')],
            ['code' => 'AT', 'description' => 'Austria', 'currency_code' => 'EUR', 'currency_name' => 'Euro', 'created_at' => date('Y-m-d H:i:s')],
            ['code' => 'AZ', 'description' => 'Azerbaijan', 'currency_code' => 'AZN', 'currency_name' => 'Manat', 'created_at' => date('Y-m-d H:i:s')],
            ['code' => 'BS', 'description' => 'Bahamas', 'currency_code' => 'BSD', 'currency_name' => 'Dollar', 'created_at' => date('Y-m-d H:i:s')],
            ['code' => 'BH', 'description' => 'Bahrain', 'currency_code' => 'BHD', 'currency_name' => 'Dinar', 'created_at' => date('Y-m-d H:i:s')],
            ['code' => 'BD', 'description' => 'Bangladesh', 'currency_code' => 'BDT', 'currency_name' => 'Taka', 'created_at' => date('Y-m-d H:i:s')],
            ['code' => 'BB', 'description' => 'Barbados', 'currency_code' => 'BBD', 'currency_name' => 'Dollar', 'created_at' => date('Y-m-d H:i:s')],
            ['code' => 'BY', 'description' => 'Belarus', 'currency_code' => 'BYR', 'currency_name' => 'Ruble', 'created_at' => date('Y-m-d H:i:s')],
            ['code' => 'BE', 'description' => 'Belgium', 'currency_code' => 'EUR', 'currency_name' => 'Euro', 'created_at' => date('Y-m-d H:i:s')],
            ['code' => 'BZ', 'description' => 'Belize', 'currency_code' => 'BZD', 'currency_name' => 'Dollar', 'created_at' => date('Y-m-d H:i:s')],
            ['code' => 'BJ', 'description' => 'Benin', 'currency_code' => 'XOF', 'currency_name' => 'Franc', 'created_at' => date('Y-m-d H:i:s')],
            ['code' => 'BM', 'description' => 'Bermuda', 'currency_code' => 'BMD', 'currency_name' => 'Dollar', 'created_at' => date('Y-m-d H:i:s')],
            ['code' => 'BT', 'description' => 'Bhutan', 'currency_code' => 'BTN', 'currency_name' => 'Ngultrum', 'created_at' => date('Y-m-d H:i:s')],
            ['code' => 'BO', 'description' => 'Bolivia', 'currency_code' => 'BOB', 'currency_name' => 'Boliviano', 'created_at' => date('Y-m-d H:i:s')],
            ['code' => 'BA', 'description' => 'Bosnia and Herzegovina', 'currency_code' => 'BAM', 'currency_name' => 'Marka', 'created_at' => date('Y-m-d H:i:s')],
            ['code' => 'BW', 'description' => 'Botswana', 'currency_code' => 'BWP', 'currency_name' => 'Pula', 'created_at' => date('Y-m-d H:i:s')],
            ['code' => 'BR', 'description' => 'Brazil', 'currency_code' => 'BRL', 'currency_name' => 'Real', 'created_at' => date('Y-m-d H:i:s')],
            ['code' => 'VG', 'description' => 'British Virgin Islands', 'currency_code' => 'USD', 'currency_name' => 'Dollar', 'created_at' => date('Y-m-d H:i:s')],
            ['code' => 'BN', 'description' => 'Brunei', 'currency_code' => 'BND', 'currency_name' => 'Dollar', 'created_at' => date('Y-m-d H:i:s')],
            ['code' => 'BG', 'description' => 'Bulgaria', 'currency_code' => 'BGN', 'currency_name' => 'Lev', 'created_at' => date('Y-m-d H:i:s')],
            ['code' => 'BF', 'description' => 'Burkina Faso', 'currency_code' => 'XOF', 'currency_name' => 'Franc', 'created_at' => date('Y-m-d H:i:s')],
            ['code' => 'BI', 'description' => 'Burundi', 'currency_code' => 'BIF', 'currency_name' => 'Franc', 'created_at' => date('Y-m-d H:i:s')],
            ['code' => 'KH', 'description' => 'Cambodia', 'currency_code' => 'KHR', 'currency_name' => 'Riels', 'created_at' => date('Y-m-d H:i:s')],
            ['code' => 'CM', 'description' => 'Cameroon', 'currency_code' => 'XAF', 'currency_name' => 'Franc', 'created_at' => date('Y-m-d H:i:s')],
            ['code' => 'CA', 'description' => 'Canada', 'currency_code' => 'CAD', 'currency_name' => 'Dollar', 'created_at' => date('Y-m-d H:i:s')],
            ['code' => 'CV', 'description' => 'Cape Verde', 'currency_code' => 'CVE', 'currency_name' => 'Escudo', 'created_at' => date('Y-m-d H:i:s')],
            ['code' => 'KY', 'description' => 'Cayman Islands', 'currency_code' => 'KYD', 'currency_name' => 'Dollar', 'created_at' => date('Y-m-d H:i:s')],
            ['code' => 'CF', 'description' => 'Central African Republic', 'currency_code' => 'XAF', 'currency_name' => 'Franc', 'created_at' => date('Y-m-d H:i:s')],
            ['code' => 'TD', 'description' => 'Chad', 'currency_code' => 'XAF', 'currency_name' => 'Franc', 'created_at' => date('Y-m-d H:i:s')],
            ['code' => 'CL', 'description' => 'Chile', 'currency_code' => 'CLP', 'currency_name' => 'Peso', 'created_at' => date('Y-m-d H:i:s')],
            ['code' => 'CN', 'description' => 'China', 'currency_code' =>'CNY', 'currency_name' =>'Yuan Renminbi', 'created_at' => date('Y-m-d H:i:s')],
            ['code' => 'CX', 'description' => 'Christmas Island', 'currency_code' => 'AUD', 'currency_name' => 'Dollar', 'created_at' => date('Y-m-d H:i:s')],
            ['code' => 'CO', 'description' => 'Colombia', 'currency_code' => 'COP', 'currency_name' => 'Peso', 'created_at' => date('Y-m-d H:i:s')],
            ['code' => 'KM', 'description' => 'Comoros', 'currency_code' => 'KMF', 'currency_name' => 'Franc', 'created_at' => date('Y-m-d H:i:s')],
            ['code' => 'CK', 'description' => 'Cook Islands', 'currency_code' => 'NZD', 'currency_name' => 'Dollar', 'created_at' => date('Y-m-d H:i:s')],
            ['code' => 'CR', 'description' => 'Costa Rica', 'currency_code' => 'CRC', 'currency_name' => 'Colon', 'created_at' => date('Y-m-d H:i:s')],
            ['code' => 'HR', 'description' => 'Croatia', 'currency_code' => 'HRK', 'currency_name' => 'Kuna', 'created_at' => date('Y-m-d H:i:s')],
            ['code' => 'CU', 'description' => 'Cuba', 'currency_code' => 'CUP', 'currency_name' => 'Peso', 'created_at' => date('Y-m-d H:i:s')],
            ['code' => 'CW', 'description' => 'Curacao', 'currency_code' => 'ANG', 'currency_name' => 'Guilder', 'created_at' => date('Y-m-d H:i:s')],
            ['code' => 'CY', 'description' => 'Cyprus', 'currency_code' => 'EUR', 'currency_name' => 'Euro', 'created_at' => date('Y-m-d H:i:s')],
            ['code' => 'CZ', 'description' => 'Czech Republic', 'currency_code' => 'CZK', 'currency_name' => 'Koruna', 'created_at' => date('Y-m-d H:i:s')],
            ['code' => 'CD', 'description' => 'Democratic Republic of the Congo', 'currency_code' => 'CDF', 'currency_name' => 'Franc', 'created_at' => date('Y-m-d H:i:s')],
            ['code' => 'DK', 'description' => 'Denmark', 'currency_code' => 'DKK', 'currency_name' => 'Krone', 'created_at' => date('Y-m-d H:i:s')],
            ['code' => 'DJ', 'description' => 'Djibouti', 'currency_code' => 'DJF', 'currency_name' => 'Franc', 'created_at' => date('Y-m-d H:i:s')],
            ['code' => 'DM', 'description' => 'Dominica', 'currency_code' => 'XCD', 'currency_name' => 'Dollar', 'created_at' => date('Y-m-d H:i:s')],
            ['code' => 'DO', 'description' => 'Dominican Republic', 'currency_code' => 'DOP', 'currency_name' => 'Peso', 'created_at' => date('Y-m-d H:i:s')],
            ['code' => 'TL', 'description' => 'East Timor', 'currency_code' => 'USD', 'currency_name' => 'Dollar', 'created_at' => date('Y-m-d H:i:s')],
            ['code' => 'EC', 'description' => 'Ecuador', 'currency_code' => 'USD', 'currency_name' => 'Dollar', 'created_at' => date('Y-m-d H:i:s')],
            ['code' => 'EG', 'description' => 'Egypt', 'currency_code' => 'EGP', 'currency_name' => 'Pound', 'created_at' => date('Y-m-d H:i:s')],
            ['code' => 'SV', 'description' => 'El Salvador', 'currency_code' => 'USD', 'currency_name' => 'Dollar', 'created_at' => date('Y-m-d H:i:s')],
            ['code' => 'GQ', 'description' => 'Equatorial Guinea', 'currency_code' => 'XAF', 'currency_name' => 'Franc', 'created_at' => date('Y-m-d H:i:s')],
            ['code' => 'ER', 'description' => 'Eritrea', 'currency_code' => 'ERN', 'currency_name' => 'Nakfa', 'created_at' => date('Y-m-d H:i:s')],
            ['code' => 'EE', 'description' => 'Estonia', 'currency_code' => 'EUR', 'currency_name' => 'Euro', 'created_at' => date('Y-m-d H:i:s')],
            ['code' => 'ET', 'description' => 'Ethiopia', 'currency_code' => 'ETB', 'currency_name' => 'Birr', 'created_at' => date('Y-m-d H:i:s')],
            ['code' => 'FK', 'description' => 'Falkland Islands', 'currency_code' => 'FKP', 'currency_name' => 'Pound', 'created_at' => date('Y-m-d H:i:s')],
            ['code' => 'FO', 'description' => 'Faroe Islands', 'currency_code' => 'DKK', 'currency_name' => 'Krone', 'created_at' => date('Y-m-d H:i:s')],
            ['code' => 'FJ', 'description' => 'Fiji', 'currency_code' => 'FJD', 'currency_name' => 'Dollar', 'created_at' => date('Y-m-d H:i:s')],
            ['code' => 'FI', 'description' => 'Finland', 'currency_code' => 'EUR', 'currency_name' => 'Euro', 'created_at' => date('Y-m-d H:i:s')],
            ['code' => 'FR', 'description' => 'France', 'currency_code' => 'EUR', 'currency_name' => 'Euro', 'created_at' => date('Y-m-d H:i:s')],
            ['code' => 'GF', 'description' => 'French Guiana', 'currency_code' => 'EUR', 'currency_name' => 'Euro', 'created_at' => date('Y-m-d H:i:s')],
            ['code' => 'PF', 'description' => 'French Polynesia', 'currency_code' => 'XPF', 'currency_name' => 'Franc', 'created_at' => date('Y-m-d H:i:s')],
            ['code' => 'GA', 'description' => 'Gabon', 'currency_code' => 'XAF', 'currency_name' => 'Franc', 'created_at' => date('Y-m-d H:i:s')],
            ['code' => 'GM', 'description' => 'Gambia', 'currency_code' => 'GMD', 'currency_name' => 'Dalasi', 'created_at' => date('Y-m-d H:i:s')],
            ['code' => 'GE', 'description' => 'Georgia', 'currency_code' => 'GEL', 'currency_name' => 'Lari', 'created_at' => date('Y-m-d H:i:s')],
            ['code' => 'DE', 'description' => 'Germany', 'currency_code' => 'EUR', 'currency_name' => 'Euro', 'created_at' => date('Y-m-d H:i:s')],
            ['code' => 'GH', 'description' => 'Ghana', 'currency_code' => 'GHS', 'currency_name' => 'Cedi', 'created_at' => date('Y-m-d H:i:s')],
            ['code' => 'GI', 'description' => 'Gibraltar', 'currency_code' => 'GIP', 'currency_name' => 'Pound', 'created_at' => date('Y-m-d H:i:s')],
            ['code' => 'GR', 'description' => 'Greece', 'currency_code' => 'EUR', 'currency_name' => 'Euro', 'created_at' => date('Y-m-d H:i:s')],
            ['code' => 'GL', 'description' => 'Greenland', 'currency_code' => 'DKK', 'currency_name' => 'Krone', 'created_at' => date('Y-m-d H:i:s')],
            ['code' => 'GD', 'description' => 'Grenada', 'currency_code' => 'XCD', 'currency_name' => 'Dollar', 'created_at' => date('Y-m-d H:i:s')],
            ['code' => 'GP', 'description' => 'Guadeloupe', 'currency_code' => 'EUR', 'currency_name' => 'Euro', 'created_at' => date('Y-m-d H:i:s')],
            ['code' => 'GU', 'description' => 'Guam', 'currency_code' => 'USD', 'currency_name' => 'Dollar', 'created_at' => date('Y-m-d H:i:s')],
            ['code' => 'GT', 'description' => 'Guatemala', 'currency_code' => 'GTQ', 'currency_name' => 'Quetzal', 'created_at' => date('Y-m-d H:i:s')],
            ['code' => 'GG', 'description' => 'Guernsey', 'currency_code' => 'GBP', 'currency_name' => 'Pound', 'created_at' => date('Y-m-d H:i:s')],
            ['code' => 'GN', 'description' => 'Guinea', 'currency_code' => 'GNF', 'currency_name' => 'Franc', 'created_at' => date('Y-m-d H:i:s')],
            ['code' => 'GW', 'description' => 'Guinea-Bissau', 'currency_code' => 'XOF', 'currency_name' => 'Franc', 'created_at' => date('Y-m-d H:i:s')],
            ['code' => 'GY', 'description' => 'Guyana', 'currency_code' => 'GYD', 'currency_name' => 'Dollar', 'created_at' => date('Y-m-d H:i:s')],
            ['code' => 'HT', 'description' => 'Haiti', 'currency_code' => 'HTG', 'currency_name' => 'Gourde', 'created_at' => date('Y-m-d H:i:s')],
            ['code' => 'HN', 'description' => 'Honduras', 'currency_code' => 'HNL', 'currency_name' => 'Lempira', 'created_at' => date('Y-m-d H:i:s')],
            ['code' => 'HK', 'description' => 'Hong Kong', 'currency_code' => 'HKD', 'currency_name' => 'Dollar', 'created_at' => date('Y-m-d H:i:s')],
            ['code' => 'HU', 'description' => 'Hungary', 'currency_code' => 'HUF', 'currency_name' => 'Forint', 'created_at' => date('Y-m-d H:i:s')],
            ['code' => 'IS', 'description' => 'Iceland', 'currency_code' => 'ISK', 'currency_name' => 'Krona', 'created_at' => date('Y-m-d H:i:s')],
            ['code' => 'IN', 'description' => 'India', 'currency_code' => 'INR', 'currency_name' => 'Rupee', 'created_at' => date('Y-m-d H:i:s')],
            ['code' => 'ID', 'description' => 'Indonesia', 'currency_code' => 'IDR', 'currency_name' => 'Rupiah', 'created_at' => date('Y-m-d H:i:s')],
            ['code' => 'IR', 'description' => 'Iran', 'currency_code' => 'IRR', 'currency_name' => 'Rial', 'created_at' => date('Y-m-d H:i:s')],
            ['code' => 'IQ', 'description' => 'Iraq', 'currency_code' => 'IQD', 'currency_name' => 'Dinar', 'created_at' => date('Y-m-d H:i:s')],
            ['code' => 'IE', 'description' => 'Ireland', 'currency_code' => 'EUR', 'currency_name' => 'Euro', 'created_at' => date('Y-m-d H:i:s')],
            ['code' => 'IM', 'description' => 'Isle of Man', 'currency_code' => 'GBP', 'currency_name' => 'Pound', 'created_at' => date('Y-m-d H:i:s')],
            ['code' => 'IL', 'description' => 'Israel', 'currency_code' => 'ILS', 'currency_name' => 'Shekel', 'created_at' => date('Y-m-d H:i:s')],
            ['code' => 'IT', 'description' => 'Italy', 'currency_code' => 'EUR', 'currency_name' => 'Euro', 'created_at' => date('Y-m-d H:i:s')],
            ['code' => 'CI', 'description' => 'Ivory Coast', 'currency_code' => 'XOF', 'currency_name' => 'Franc', 'created_at' => date('Y-m-d H:i:s')],
            ['code' => 'JM', 'description' => 'Jamaica', 'currency_code' => 'JMD', 'currency_name' => 'Dollar', 'created_at' => date('Y-m-d H:i:s')],
            ['code' => 'JP', 'description' => 'Japan', 'currency_code' => 'JPY', 'currency_name' => 'Yen', 'created_at' => date('Y-m-d H:i:s')],
            ['code' => 'JE', 'description' => 'Jersey', 'currency_code' => 'GBP', 'currency_name' => 'Pound', 'created_at' => date('Y-m-d H:i:s')],
            ['code' => 'JO', 'description' => 'Jordan', 'currency_code' => 'JOD', 'currency_name' => 'Dinar', 'created_at' => date('Y-m-d H:i:s')],
            ['code' => 'KZ', 'description' => 'Kazakhstan', 'currency_code' => 'KZT', 'currency_name' => 'Tenge', 'created_at' => date('Y-m-d H:i:s')],
            ['code' => 'KE', 'description' => 'Kenya', 'currency_code' => 'KES', 'currency_name' => 'Shilling', 'created_at' => date('Y-m-d H:i:s')],
            ['code' => 'KI', 'description' => 'Kiribati', 'currency_code' => 'AUD', 'currency_name' => 'Dollar', 'created_at' => date('Y-m-d H:i:s')],
            ['code' => 'XK', 'description' => 'Kosovo', 'currency_code' => 'EUR', 'currency_name' => 'Euro', 'created_at' => date('Y-m-d H:i:s')],
            ['code' => 'KW', 'description' => 'Kuwait', 'currency_code' => 'KWD', 'currency_name' => 'Dinar', 'created_at' => date('Y-m-d H:i:s')],
            ['code' => 'KG', 'description' => 'Kyrgyzstan', 'currency_code' => 'KGS', 'currency_name' => 'Som', 'created_at' => date('Y-m-d H:i:s')],
            ['code' => 'LA', 'description' => 'Laos', 'currency_code' => 'LAK', 'currency_name' => 'Kip', 'created_at' => date('Y-m-d H:i:s')],
            ['code' => 'LV', 'description' => 'Latvia', 'currency_code' => 'EUR', 'currency_name' => 'Euro', 'created_at' => date('Y-m-d H:i:s')],
            ['code' => 'LB', 'description' => 'Lebanon', 'currency_code' => 'LBP', 'currency_name' => 'Pound', 'created_at' => date('Y-m-d H:i:s')],
            ['code' => 'LS', 'description' => 'Lesotho', 'currency_code' => 'LSL', 'currency_name' => 'Loti', 'created_at' => date('Y-m-d H:i:s')],
            ['code' => 'LR', 'description' => 'Liberia', 'currency_code' => 'LRD', 'currency_name' => 'Dollar', 'created_at' => date('Y-m-d H:i:s')],
            ['code' => 'LY', 'description' => 'Libya', 'currency_code' => 'LYD', 'currency_name' => 'Dinar', 'created_at' => date('Y-m-d H:i:s')],
            ['code' => 'LI', 'description' => 'Liechtenstein', 'currency_code' => 'CHF', 'currency_name' => 'Franc', 'created_at' => date('Y-m-d H:i:s')],
            ['code' => 'LT', 'description' => 'Lithuania', 'currency_code' => 'LTL', 'currency_name' => 'Litas', 'created_at' => date('Y-m-d H:i:s')],
            ['code' => 'LU', 'description' => 'Luxembourg', 'currency_code' => 'EUR', 'currency_name' => 'Euro', 'created_at' => date('Y-m-d H:i:s')],
            ['code' => 'MO', 'description' => 'Macao', 'currency_code' => 'MOP', 'currency_name' => 'Pataca', 'created_at' => date('Y-m-d H:i:s')],
            ['code' => 'MK', 'description' => 'Macedonia', 'currency_code' => 'MKD', 'currency_name' => 'Denar', 'created_at' => date('Y-m-d H:i:s')],
            ['code' => 'MG', 'description' => 'Madagascar', 'currency_code' => 'MGA', 'currency_name' => 'Ariary', 'created_at' => date('Y-m-d H:i:s')],
            ['code' => 'MW', 'description' => 'Malawi', 'currency_code' => 'MWK', 'currency_name' => 'Kwacha', 'created_at' => date('Y-m-d H:i:s')],
            ['code' => 'MY', 'description' => 'Malaysia', 'currency_code' => 'MYR', 'currency_name' => 'Ringgit', 'created_at' => date('Y-m-d H:i:s')],
            ['code' => 'MV', 'description' => 'Maldives', 'currency_code' => 'MVR', 'currency_name' => 'Rufiyaa', 'created_at' => date('Y-m-d H:i:s')],
            ['code' => 'ML', 'description' => 'Mali', 'currency_code' => 'XOF', 'currency_name' => 'Franc', 'created_at' => date('Y-m-d H:i:s')],
            ['code' => 'MT', 'description' => 'Malta', 'currency_code' => 'EUR', 'currency_name' => 'Euro', 'created_at' => date('Y-m-d H:i:s')],
            ['code' => 'MH', 'description' => 'Marshall Islands', 'currency_code' => 'USD', 'currency_name' => 'Dollar', 'created_at' => date('Y-m-d H:i:s')],
            ['code' => 'MQ', 'description' => 'Martinique', 'currency_code' => 'EUR', 'currency_name' => 'Euro', 'created_at' => date('Y-m-d H:i:s')],
            ['code' => 'MR', 'description' => 'Mauritania', 'currency_code' => 'MRO', 'currency_name' => 'Ouguiya', 'created_at' => date('Y-m-d H:i:s')],
            ['code' => 'MU', 'description' => 'Mauritius', 'currency_code' => 'MUR', 'currency_name' => 'Rupee', 'created_at' => date('Y-m-d H:i:s')],
            ['code' => 'YT', 'description' => 'Mayotte', 'currency_code' => 'EUR', 'currency_name' => 'Euro', 'created_at' => date('Y-m-d H:i:s')],
            ['code' => 'MX', 'description' => 'Mexico', 'currency_code' => 'MXN', 'currency_name' => 'Peso', 'created_at' => date('Y-m-d H:i:s')],
            ['code' => 'FM', 'description' => 'Micronesia', 'currency_code' => 'USD', 'currency_name' => 'Dollar', 'created_at' => date('Y-m-d H:i:s')],
            ['code' => 'MD', 'description' => 'Moldova', 'currency_code' => 'MDL', 'currency_name' => 'Leu', 'created_at' => date('Y-m-d H:i:s')],
            ['code' => 'MC', 'description' => 'Monaco', 'currency_code' => 'EUR', 'currency_name' => 'Euro', 'created_at' => date('Y-m-d H:i:s')],
            ['code' => 'MN', 'description' => 'Mongolia', 'currency_code' => 'MNT', 'currency_name' => 'Tugrik', 'created_at' => date('Y-m-d H:i:s')],
            ['code' => 'ME', 'description' => 'Montenegro', 'currency_code' => 'EUR', 'currency_name' => 'Euro', 'created_at' => date('Y-m-d H:i:s')],
            ['code' => 'MS', 'description' => 'Montserrat', 'currency_code' => 'XCD', 'currency_name' => 'Dollar', 'created_at' => date('Y-m-d H:i:s')],
            ['code' => 'MA', 'description' => 'Morocco', 'currency_code' => 'MAD', 'currency_name' => 'Dirham', 'created_at' => date('Y-m-d H:i:s')],
            ['code' => 'MZ', 'description' => 'Mozambique', 'currency_code' => 'MZN', 'currency_name' => 'Metical', 'created_at' => date('Y-m-d H:i:s')],
            ['code' => 'MM', 'description' => 'Myanmar', 'currency_code' => 'MMK', 'currency_name' => 'Kyat', 'created_at' => date('Y-m-d H:i:s')],
            ['code' => 'NA', 'description' => 'Namibia', 'currency_code' => 'NAD', 'currency_name' => 'Dollar', 'created_at' => date('Y-m-d H:i:s')],
            ['code' => 'NR', 'description' => 'Nauru', 'currency_code' => 'AUD', 'currency_name' => 'Dollar', 'created_at' => date('Y-m-d H:i:s')],
            ['code' => 'NP', 'description' => 'Nepal', 'currency_code' => 'NPR', 'currency_name' => 'Rupee', 'created_at' => date('Y-m-d H:i:s')],
            ['code' => 'NL', 'description' => 'Netherlands', 'currency_code' => 'EUR', 'currency_name' => 'Euro', 'created_at' => date('Y-m-d H:i:s')],
            ['code' => 'NC', 'description' => 'New Caledonia', 'currency_code' => 'XPF', 'currency_name' => 'Franc', 'created_at' => date('Y-m-d H:i:s')],
            ['code' => 'NZ', 'description' => 'New Zealand', 'currency_code' => 'NZD', 'currency_name' => 'Dollar', 'created_at' => date('Y-m-d H:i:s')],
            ['code' => 'NI', 'description' => 'Nicaragua', 'currency_code' => 'NIO', 'currency_name' => 'Cordoba', 'created_at' => date('Y-m-d H:i:s')],
            ['code' => 'NE', 'description' => 'Niger', 'currency_code' => 'XOF', 'currency_name' => 'Franc', 'created_at' => date('Y-m-d H:i:s')],
            ['code' => 'NG', 'description' => 'Nigeria', 'currency_code' => 'NGN', 'currency_name' => 'Naira', 'created_at' => date('Y-m-d H:i:s')],
            ['code' => 'NU', 'description' => 'Niue', 'currency_code' => 'NZD', 'currency_name' => 'Dollar', 'created_at' => date('Y-m-d H:i:s')],
            ['code' => 'NF', 'description' => 'Norfolk Island', 'currency_code' => 'AUD', 'currency_name' => 'Dollar', 'created_at' => date('Y-m-d H:i:s')],
            ['code' => 'KP', 'description' => 'North Korea', 'currency_code' => 'KPW', 'currency_name' => 'Won', 'created_at' => date('Y-m-d H:i:s')],
            ['code' => 'MP', 'description' => 'Northern Mariana Islands', 'currency_code' => 'USD', 'currency_name' => 'Dollar', 'created_at' => date('Y-m-d H:i:s')],
            ['code' => 'NO', 'description' => 'Norway', 'currency_code' => 'NOK', 'currency_name' => 'Krone', 'created_at' => date('Y-m-d H:i:s')],
            ['code' => 'OM', 'description' => 'Oman', 'currency_code' => 'OMR', 'currency_name' => 'Rial', 'created_at' => date('Y-m-d H:i:s')],
            ['code' => 'PK', 'description' => 'Pakistan', 'currency_code' => 'PKR', 'currency_name' => 'Rupee', 'created_at' => date('Y-m-d H:i:s')],
            ['code' => 'PW', 'description' => 'Palau', 'currency_code' => 'USD', 'currency_name' => 'Dollar', 'created_at' => date('Y-m-d H:i:s')],
            ['code' => 'PS', 'description' => 'Palestinian Territory', 'currency_code' => 'ILS', 'currency_name' => 'Shekel', 'created_at' => date('Y-m-d H:i:s')],
            ['code' => 'PA', 'description' => 'Panama', 'currency_code' => 'PAB', 'currency_name' => 'Balboa', 'created_at' => date('Y-m-d H:i:s')],
            ['code' => 'PG', 'description' => 'Papua New Guinea', 'currency_code' => 'PGK', 'currency_name' => 'Kina', 'created_at' => date('Y-m-d H:i:s')],
            ['code' => 'PY', 'description' => 'Paraguay', 'currency_code' => 'PYG', 'currency_name' => 'Guarani', 'created_at' => date('Y-m-d H:i:s')],
            ['code' => 'PE', 'description' => 'Peru', 'currency_code' => 'PEN', 'currency_name' => 'Sol', 'created_at' => date('Y-m-d H:i:s')],
            ['code' => 'PH', 'description' => 'Philippines', 'currency_code' => 'PHP', 'currency_name' => 'Peso', 'created_at' => date('Y-m-d H:i:s')],
            ['code' => 'PN', 'description' => 'Pitcairn', 'currency_code' => 'NZD', 'currency_name' => 'Dollar', 'created_at' => date('Y-m-d H:i:s')],
            ['code' => 'PL', 'description' => 'Poland', 'currency_code' => 'PLN', 'currency_name' => 'Zloty', 'created_at' => date('Y-m-d H:i:s')],
            ['code' => 'PT', 'description' => 'Portugal', 'currency_code' => 'EUR', 'currency_name' => 'Euro', 'created_at' => date('Y-m-d H:i:s')],
            ['code' => 'PR', 'description' => 'Puerto Rico', 'currency_code' => 'USD', 'currency_name' => 'Dollar', 'created_at' => date('Y-m-d H:i:s')],
            ['code' => 'QA', 'description' => 'Qatar', 'currency_code' => 'QAR', 'currency_name' => 'Rial', 'created_at' => date('Y-m-d H:i:s')],
            ['code' => 'CG', 'description' => 'Republic of the Congo', 'currency_code' => 'XAF', 'currency_name' => 'Franc', 'created_at' => date('Y-m-d H:i:s')],
            ['code' => 'RE', 'description' => 'Reunion', 'currency_code' => 'EUR', 'currency_name' => 'Euro', 'created_at' => date('Y-m-d H:i:s')],
            ['code' => 'RO', 'description' => 'Romania', 'currency_code' => 'RON', 'currency_name' => 'Leu', 'created_at' => date('Y-m-d H:i:s')],
            ['code' => 'RU', 'description' => 'Russia', 'currency_code' => 'RUB', 'currency_name' => 'Ruble', 'created_at' => date('Y-m-d H:i:s')],
            ['code' => 'RW', 'description' => 'Rwanda', 'currency_code' => 'RWF', 'currency_name' => 'Franc', 'created_at' => date('Y-m-d H:i:s')],
            ['code' => 'KN', 'description' => 'Saint Kitts and Nevis', 'currency_code' => 'XCD', 'currency_name' => 'Dollar', 'created_at' => date('Y-m-d H:i:s')],
            ['code' => 'LC', 'description' => 'Saint Lucia', 'currency_code' => 'XCD', 'currency_name' => 'Dollar', 'created_at' => date('Y-m-d H:i:s')],
            ['code' => 'MF', 'description' => 'Saint Martin', 'currency_code' => 'EUR', 'currency_name' => 'Euro', 'created_at' => date('Y-m-d H:i:s')],
            ['code' => 'PM', 'description' => 'Saint Pierre and Miquelon', 'currency_code' => 'EUR', 'currency_name' => 'Euro', 'created_at' => date('Y-m-d H:i:s')],
            ['code' => 'VC', 'description' => 'St Vincent and the Grenadines', 'currency_code' => 'XCD', 'currency_name' => 'Dollar', 'created_at' => date('Y-m-d H:i:s')],
            ['code' => 'WS', 'description' => 'Samoa', 'currency_code' => 'WST', 'currency_name' => 'Tala', 'created_at' => date('Y-m-d H:i:s')],
            ['code' => 'SM', 'description' => 'San Marino', 'currency_code' => 'EUR', 'currency_name' => 'Euro', 'created_at' => date('Y-m-d H:i:s')],
            ['code' => 'ST', 'description' => 'Sao Tome and Principe', 'currency_code' => 'STD', 'currency_name' => 'Dobra', 'created_at' => date('Y-m-d H:i:s')],
            ['code' => 'SA', 'description' => 'Saudi Arabia', 'currency_code' => 'SAR', 'currency_name' => 'Rial', 'created_at' => date('Y-m-d H:i:s')],
            ['code' => 'SN', 'description' => 'Senegal', 'currency_code' => 'XOF', 'currency_name' => 'Franc', 'created_at' => date('Y-m-d H:i:s')],
            ['code' => 'RS', 'description' => 'Serbia', 'currency_code' => 'RSD', 'currency_name' => 'Dinar', 'created_at' => date('Y-m-d H:i:s')],
            ['code' => 'CS', 'description' => 'Serbia and Montenegro', 'currency_code' => 'RSD', 'currency_name' => 'Dinar', 'created_at' => date('Y-m-d H:i:s')],
            ['code' => 'SC', 'description' => 'Seychelles', 'currency_code' => 'SCR', 'currency_name' => 'Rupee', 'created_at' => date('Y-m-d H:i:s')],
            ['code' => 'SL', 'description' => 'Sierra Leone', 'currency_code' => 'SLL', 'currency_name' => 'Leone', 'created_at' => date('Y-m-d H:i:s')],
            ['code' => 'SG', 'description' => 'Singapore', 'currency_code' => 'SGD', 'currency_name' => 'Dollar', 'created_at' => date('Y-m-d H:i:s')],
            ['code' => 'SX', 'description' => 'Sint Maarten', 'currency_code' => 'ANG', 'currency_name' => 'Guilder', 'created_at' => date('Y-m-d H:i:s')],
            ['code' => 'SK', 'description' => 'Slovakia', 'currency_code' => 'EUR', 'currency_name' => 'Euro', 'created_at' => date('Y-m-d H:i:s')],
            ['code' => 'SI', 'description' => 'Slovenia', 'currency_code' => 'EUR', 'currency_name' => 'Euro', 'created_at' => date('Y-m-d H:i:s')],
            ['code' => 'SB', 'description' => 'Solomon Islands', 'currency_code' => 'SBD', 'currency_name' => 'Dollar', 'created_at' => date('Y-m-d H:i:s')],
            ['code' => 'SO', 'description' => 'Somalia', 'currency_code' => 'SOS', 'currency_name' => 'Shilling', 'created_at' => date('Y-m-d H:i:s')],
            ['code' => 'GS', 'description' => 'South Georgia', 'currency_code' => 'GBP', 'currency_name' => 'Pound', 'created_at' => date('Y-m-d H:i:s')],
            ['code' => 'KR', 'description' => 'South Korea', 'currency_code' => 'KRW', 'currency_name' => 'Won', 'created_at' => date('Y-m-d H:i:s')],
            ['code' => 'SS', 'description' => 'South Sudan', 'currency_code' => 'SSP', 'currency_name' => 'Pound', 'created_at' => date('Y-m-d H:i:s')],
            ['code' => 'ES', 'description' => 'Spain', 'currency_code' => 'EUR', 'currency_name' => 'Euro', 'created_at' => date('Y-m-d H:i:s')],
            ['code' => 'LK', 'description' => 'Sri Lanka', 'currency_code' => 'LKR', 'currency_name' => 'Rupee', 'created_at' => date('Y-m-d H:i:s')],
            ['code' => 'SD', 'description' => 'Sudan', 'currency_code' => 'SDG', 'currency_name' => 'Pound', 'created_at' => date('Y-m-d H:i:s')],
            ['code' => 'SR', 'description' => 'Suriname', 'currency_code' => 'SRD', 'currency_name' => 'Dollar', 'created_at' => date('Y-m-d H:i:s')],
            ['code' => 'SZ', 'description' => 'Swaziland', 'currency_code' => 'SZL', 'currency_name' => 'Lilangeni', 'created_at' => date('Y-m-d H:i:s')],
            ['code' => 'SE', 'description' => 'Sweden', 'currency_code' => 'SEK', 'currency_name' => 'Krona', 'created_at' => date('Y-m-d H:i:s')],
            ['code' => 'CH', 'description' => 'Switzerland', 'currency_code' => 'CHF', 'currency_name' => 'Franc', 'created_at' => date('Y-m-d H:i:s')],
            ['code' => 'SY', 'description' => 'Syria', 'currency_code' => 'SYP', 'currency_name' => 'Pound', 'created_at' => date('Y-m-d H:i:s')],
            ['code' => 'TW', 'description' => 'Taiwan', 'currency_code' => 'TWD', 'currency_name' => 'Dollar', 'created_at' => date('Y-m-d H:i:s')],
            ['code' => 'TJ', 'description' => 'Tajikistan', 'currency_code' => 'TJS', 'currency_name' => 'Somoni', 'created_at' => date('Y-m-d H:i:s')],
            ['code' => 'TZ', 'description' => 'Tanzania', 'currency_code' => 'TZS', 'currency_name' => 'Shilling', 'created_at' => date('Y-m-d H:i:s')],
            ['code' => 'TH', 'description' => 'Thailand', 'currency_code' => 'THB', 'currency_name' => 'Baht', 'created_at' => date('Y-m-d H:i:s')],
            ['code' => 'TG', 'description' => 'Togo', 'currency_code' => 'XOF', 'currency_name' => 'Franc', 'created_at' => date('Y-m-d H:i:s')],
            ['code' => 'TO', 'description' => 'Tonga', 'currency_code' =>'TOP', 'currency_name' =>'Pa anga', 'created_at' => date('Y-m-d H:i:s')],
            ['code' => 'TT', 'description' => 'Trinidad and Tobago', 'currency_code' => 'TTD', 'currency_name' => 'Dollar', 'created_at' => date('Y-m-d H:i:s')],
            ['code' => 'TN', 'description' => 'Tunisia', 'currency_code' => 'TND', 'currency_name' => 'Dinar', 'created_at' => date('Y-m-d H:i:s')],
            ['code' => 'TR', 'description' => 'Turkey', 'currency_code' => 'TRY', 'currency_name' => 'Lira', 'created_at' => date('Y-m-d H:i:s')],
            ['code' => 'TM', 'description' => 'Turkmenistan', 'currency_code' => 'TMT', 'currency_name' => 'Manat', 'created_at' => date('Y-m-d H:i:s')],
            ['code' => 'TC', 'description' => 'Turks and Caicos Islands', 'currency_code' => 'USD', 'currency_name' => 'Dollar', 'created_at' => date('Y-m-d H:i:s')],
            ['code' => 'TV', 'description' => 'Tuvalu', 'currency_code' => 'AUD', 'currency_name' => 'Dollar', 'created_at' => date('Y-m-d H:i:s')],
            ['code' => 'VI', 'description' => 'U.S. Virgin Islands', 'currency_code' => 'USD', 'currency_name' => 'Dollar', 'created_at' => date('Y-m-d H:i:s')],
            ['code' => 'UG', 'description' => 'Uganda', 'currency_code' => 'UGX', 'currency_name' => 'Shilling', 'created_at' => date('Y-m-d H:i:s')],
            ['code' => 'UA', 'description' => 'Ukraine', 'currency_code' => 'UAH', 'currency_name' => 'Hryvnia', 'created_at' => date('Y-m-d H:i:s')],
            ['code' => 'AE', 'description' => 'United Arab Emirates', 'currency_code' => 'AED', 'currency_name' => 'Dirham', 'created_at' => date('Y-m-d H:i:s')],
            ['code' => 'GB', 'description' => 'United Kingdom', 'currency_code' => 'GBP', 'currency_name' => 'Pound', 'created_at' => date('Y-m-d H:i:s')],
            ['code' => 'US', 'description' => 'United States', 'currency_code' => 'USD', 'currency_name' => 'Dollar', 'created_at' => date('Y-m-d H:i:s')],
            ['code' => 'UY', 'description' => 'Uruguay', 'currency_code' => 'UYU', 'currency_name' => 'Peso', 'created_at' => date('Y-m-d H:i:s')],
            ['code' => 'UZ', 'description' => 'Uzbekistan', 'currency_code' => 'UZS', 'currency_name' => 'Som', 'created_at' => date('Y-m-d H:i:s')],
            ['code' => 'VU', 'description' => 'Vanuatu', 'currency_code' => 'VUV', 'currency_name' => 'Vatu', 'created_at' => date('Y-m-d H:i:s')],
            ['code' => 'VA', 'description' => 'Vatican', 'currency_code' => 'EUR', 'currency_name' => 'Euro', 'created_at' => date('Y-m-d H:i:s')],
            ['code' => 'VE', 'description' => 'Venezuela', 'currency_code' => 'VEF', 'currency_name' => 'Bolivar', 'created_at' => date('Y-m-d H:i:s')],
            ['code' => 'VN', 'description' => 'Vietnam', 'currency_code' => 'VND', 'currency_name' => 'Dong', 'created_at' => date('Y-m-d H:i:s')],
            ['code' => 'WF', 'description' => 'Wallis and Futuna', 'currency_code' => 'XPF', 'currency_name' => 'Franc', 'created_at' => date('Y-m-d H:i:s')],
            ['code' => 'EH', 'description' => 'Western Sahara', 'currency_code' => 'MAD', 'currency_name' => 'Dirham', 'created_at' => date('Y-m-d H:i:s')],
            ['code' => 'YE', 'description' => 'Yemen', 'currency_code' => 'YER', 'currency_name' => 'Rial', 'created_at' => date('Y-m-d H:i:s')],
            ['code' => 'ZM', 'description' => 'Zambia', 'currency_code' => 'ZMW', 'currency_name' => 'Kwacha', 'created_at' => date('Y-m-d H:i:s')],
            ['code' => 'ZW', 'description' => 'Zimbabwe', 'currency_code' => 'ZWL', 'currency_name' => 'Dollar', 'created_at' => date('Y-m-d H:i:s')],

        ];

        DB::table('countries')->insert($data);
    }
}
