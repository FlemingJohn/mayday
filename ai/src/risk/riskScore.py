POINTS = {
    "payLate": 30,
    "foodLow": 20,
    "managerSilent": 10,
    "contractFinished": 10,
    "detainedOnce": 10,
    "detainedTwiceOrMore": 20,
    "flagChanged": 10,
    "ownerLeftCrewBefore": 20,
}


def get_months_unpaid(unpaid_since_month, reported_at):
    if unpaid_since_month is None:
        return 0
    months = (int(reported_at[0:4]) - int(unpaid_since_month[0:4])) * 12
    months += int(reported_at[5:7]) - int(unpaid_since_month[5:7])
    return max(0, months)


def get_warning_signs(data, months_unpaid):
    checks = [
        ("payLate", months_unpaid >= 2),
        ("foodLow", data["isFoodLow"]),
        ("managerSilent", data["isManagerSilent"]),
        ("contractFinished", data["isContractFinished"]),
        ("detainedOnce", data["detentionCount"] == 1),
        ("detainedTwiceOrMore", data["detentionCount"] >= 2),
        ("flagChanged", data["hasRecentFlagChange"]),
        ("ownerLeftCrewBefore", data["ownerPastCaseCount"] > 0),
    ]
    return [sign for sign, is_present in checks if is_present]


def get_risk_level(score):
    if score >= 70:
        return "urgent"
    if score >= 40:
        return "watch"
    return "okay"


def get_risk_result(data):
    months_unpaid = get_months_unpaid(data["unpaidSinceMonth"], data["reportedAt"])
    signs = get_warning_signs(data, months_unpaid)
    score = min(100, sum(POINTS[sign] for sign in signs))
    wage = data["monthlyWage"]
    return {
        "monthsUnpaid": months_unpaid,
        "wagesOwed": None if wage is None else months_unpaid * wage,
        "score": score,
        "level": get_risk_level(score),
        "warningSigns": signs,
    }


print(json.dumps(get_risk_result(RISK_INPUT)))
